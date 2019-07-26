describe('Sample test', function() {

    it('should check the header', function() {
        browser.ignoreSynchronization = true;
        browser.get('https://www.tutorialspoint.com/json/json_data_types.htm');

        var headerElement = element(by.xpath('/html/body/div[4]/div[1]/div/div[2]/div[1]/div/h1'));
        expect(headerElement.getText()).toEqual('JSON - DataTypes');
    });

    it('should element by id', function() {
        //browser.ignoreSynchronization = true;
        //browser.get('http://localhost:63342/MaidService/index.html');


        //var homeIcon = element(by.xpath('//*[@id="mainMenu"]/li[1]/a/'));
        //var parent = element(by.id('mainMenu'))
        //var child = parent.$('li')
        console.log($('#mainMenu'))

       // expect(child.getText()).toEqual('home');
    });

});


