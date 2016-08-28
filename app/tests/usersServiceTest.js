describe("usersService", function () {
  var usersService, httpBackend;

  beforeEach(module("app"));

  beforeEach(inject(function (_usersService_, $httpBackend) {
    usersService = _usersService_;
    httpBackend = $httpBackend;
  }));

  it("get users", function () {
    httpBackend.whenGET("https://livedemo.xsolla.com/fe/test-task/baev/users?limit=2&offset=0").respond({
    "recordsTotal": 113,
    "data": [
        {
            "user_id": "0",
            "user_name": "\u0410\u0433\u0435\u043d\u0442 007",
            "user_custom": null,
            "email": null,
            "register_date": "2016-06-29T20:06:51+00:00",
            "balance": 100,
            "wallet_amount": 0,
            "wallet_currency": "USD",
            "enabled": true
        },
        {
            "user_id": "00",
            "user_name": "Alex",
            "user_custom": "R",
            "email": null,
            "register_date": "2016-08-24T19:52:08+00:00",
            "balance": 0,
            "wallet_amount": 0,
            "wallet_currency": null,
            "enabled": true
        }
    ]
});
    usersService.getUsers(2,0).then(function(users) {
        expect(users.data.data.length).to.equal(2);
    });
    httpBackend.flush();
  });

});
