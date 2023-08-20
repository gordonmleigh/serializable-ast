import { Declaration } from '@gordonmleigh/superdocs/core/DeclarationCollection';

export function declarationHasDetail(def: Declaration): boolean {
  return !!(
    def.members?.length ||
    def.parameters?.length ||
    def.remarks?.length ||
    def.examples?.length
  );
}
