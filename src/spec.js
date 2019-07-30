describe('Sample test', function() {

    it('should check the header', function() {
        browser.ignoreSynchronization = true;
        browser.get('https://www.tutorialspoint.com/json/json_data_types.htm');

        var headerElement = element(by.xpath('/html/body/div[4]/div[1]/div/div[2]/div[1]/div/h1'));
        expect(headerElement.getText()).toEqual('JSON - DataTypes');
    });

   it('should element by id', function() {
       var homeElement = element(by.id('mainMenu')).all(by.tagName('li')).first().element(by.tagName('a'));
       expect(homeElement.getText()).toEqual('HOME');
    });

});


