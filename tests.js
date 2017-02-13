describe('Example describe', function() {
    beforeEach(function () {
        console.log('before each');
    });
    afterEach(function () {
        console.log('after each');
    });
    before(function () {
        console.log('before');
    });
    after(function () {
        console.log('after');
    });
    it('should be first test', function () {
        expect(1).to.equal(1);
    });
    xdescribe('Inner describe', function () {
        it('should be inner test', function () {
            expect(2).to.equal(2);
        });
    });
	describe('Inner describe 2', function () {
        it.skip('should be inner test 2.1', function () {
            expect(2).to.equal(2);
        });
		it('should be inner test 2.2', function () {
            expect(2).to.equal(2);
        });
    });
});

mocha.setup({timeout: 3000});

describe('Second describe', function () {
	it('should be asynchronous', function (done) {
		setTimeout(function () {
			expect(1).to.equal(1);
			done();
		}, 2500);
	});
});

describe('DOM describe', function () {
	it('should have at least one answer in answers list', function () {
		expect($('.answers .answer').length).to.be.above(0);
	});
	it('should have at least one product in products list', function () {
		expect($('.products .product').length).to.be.above(0);
	});
});
