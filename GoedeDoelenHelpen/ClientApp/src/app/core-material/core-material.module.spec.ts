import { CoreMaterialModule } from './core-material.module';

describe('CoreMaterialModule', () => {
  let coreMaterialModule: CoreMaterialModule;

  beforeEach(() => {
    coreMaterialModule = new CoreMaterialModule();
  });

  it('should create an instance', () => {
    expect(coreMaterialModule).toBeTruthy();
  });
});
