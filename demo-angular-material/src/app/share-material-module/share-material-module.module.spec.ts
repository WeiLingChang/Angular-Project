import { ShareMaterialModuleModule } from './share-material-module.module';

describe('ShareMaterialModuleModule', () => {
  let shareMaterialModuleModule: ShareMaterialModuleModule;

  beforeEach(() => {
    shareMaterialModuleModule = new ShareMaterialModuleModule();
  });

  it('should create an instance', () => {
    expect(shareMaterialModuleModule).toBeTruthy();
  });
});
