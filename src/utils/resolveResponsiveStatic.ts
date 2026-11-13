// get mappings object and the key to find
export function resolveFromMap(
  Mappings: Record<string, string>,
  key: string,
): string {
  return Mappings[key] || "";
}
