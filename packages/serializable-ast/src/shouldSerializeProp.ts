const bannedProps = [
  'end',
  'id',
  'modifierFlagsCache',
  'nextContainer',
  'parent',
  'pos',
];

export function shouldSerializeProp(prop: string, value: any): boolean {
  return (
    !bannedProps.includes(prop) &&
    !/[Ff]lags$/.test(prop) &&
    !/[Ff]lowNode$/.test(prop) &&
    !/[Ss]ymbol$/.test(prop) &&
    !prop.startsWith('_') &&
    typeof value !== 'function'
  );
}
