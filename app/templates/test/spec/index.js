import index from 'dist/index';
import { expect } from 'chai';

describe('Test suite', () => {
  var pandaBear;
  beforeEach(() => {
    pandaBear = new index();
    sinon.stub(pandaBear, 'eats').returns('Bamboo and more');
  });

  it('pandaBear.eats returns `Bamboo and more`', () => {
    expect(pandaBear.eats()).to.equal('Bamboo and more');
  });
});
