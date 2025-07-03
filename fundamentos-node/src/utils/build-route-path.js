export function buildRoutePath(path) {
  const routParametersRegex = /:([a-zA-Z]+)/g;

  const pathWithParams = path.replaceAll(routParametersRegex, '(?<$1>[a-z0-9-_]+)');

  const pathRegex = new RegExp(`^${pathWithParams}`);

  return pathRegex;
}
