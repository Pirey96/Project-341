import React from 'react';
import ReactDOM from 'react-dom';
import { UserInfoSection } from './UserInfoSection';

describe('Test', function() {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserInfoSection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


	it('should be successful', function(){
		var value = 0;
		expect(value).to.equal(0);
	});

	it('should call next() if the authentication succeeds', function(){
		var request = {
			isAuthenticated : function() {return true;}
		},
			response = {
				redirect : function(path) { console.log(path);}
		},
			next = function(err) {
				console.log('hi')
		};

		expect(routes.checkAuthentication(request, response, next)).to.equal(console.log('hi'));
	});
});
