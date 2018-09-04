describe ('Weather', function() {
  var weather;

    beforeEach(function() {
    weather = {
      isStormy: function() {

      }

    };

    spyOn(weather, 'isStormy').and.returnValue(true);
    dummyWeather = weather.isStormy();
  });

  it('stormy', function() {
    expect(dummyWeather).toEqual(true);
  });

});
