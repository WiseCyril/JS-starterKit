import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe ('our first test', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

describe('index.html', function() {
  it('should say hello', function() {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Development Server");
      done();
      window.close();
    })
  })
})
