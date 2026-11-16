const fs = require('fs');
const path = require('path');

const lockfile = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package-lock.json'), 'utf8')
);

function collectNthCheckVersions(dependencies, versions = []) {
  if (!dependencies || typeof dependencies !== 'object') {
    return versions;
  }

  Object.keys(dependencies).forEach((name) => {
    const entry = dependencies[name];
    if (!entry || typeof entry !== 'object') {
      return;
    }

    if (name === 'nth-check' && typeof entry.version === 'string') {
      versions.push(entry.version);
    }

    collectNthCheckVersions(entry.dependencies, versions);
  });

  return versions;
}

function collectInstalledNthCheckVersions(packages, versions = []) {
  if (!packages || typeof packages !== 'object') {
    return versions;
  }

  Object.keys(packages).forEach((packagePath) => {
    const entry = packages[packagePath];
    if (!entry || typeof entry !== 'object') {
      return;
    }

    if (
      (packagePath === 'nth-check' || packagePath.endsWith('/nth-check')) &&
      typeof entry.version === 'string'
    ) {
      versions.push(entry.version);
    }
  });

  return versions;
}

function compareVersions(left, right) {
  const leftParts = left.split('.').map(Number);
  const rightParts = right.split('.').map(Number);
  const length = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < length; index += 1) {
    const leftPart = leftParts[index] || 0;
    const rightPart = rightParts[index] || 0;

    if (leftPart !== rightPart) {
      return leftPart > rightPart ? 1 : -1;
    }
  }

  return 0;
}

test('resolves nth-check to a version without GHSA-rp65-9cf3-cjxr', () => {
  const versions = [
    ...collectNthCheckVersions(lockfile.dependencies),
    ...collectInstalledNthCheckVersions(lockfile.packages),
  ];

  expect(versions.length).toBeGreaterThan(0);

  const vulnerableVersions = versions.filter(
    (version) => compareVersions(version, '2.0.1') < 0
  );
  expect(vulnerableVersions).toEqual([]);
});
