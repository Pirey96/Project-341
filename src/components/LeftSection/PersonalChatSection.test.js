import React from 'react';
import ReactDOM from 'react-dom';
import { PersonalChatSection } from './PersonalChatSection';
describe('Test displayAppropriateSurveyPage', function() {


  it('renders without crashing', () => {
    const MessageComponent = Messages;
    const div = document.createElement('div');
    ReactDOM.render(MessageComponent, div);
    ReactDOM.unmountComponentAtNode(div);
  });

	it('expects rendering same teacher name based on username', function(){
		var request = {
			session : {session : {title : "person"}}
		},
			response = {
				render : function(path, obj) {console.log(obj);}
		},
			testObj = {
				userName: 'Haifeng'
		};

		expect(routes.displayAppropriateSurveyPage(request, response)).to.equal(console.log(testObj));
	});

	it('expects reponse to be called', function(){
		var request = {
			session : {session : {title : "person"}}
		},
			response = {
				render : function(path, obj) {console.log(obj);}
		};

		routes.displayAppropriateSurveyPage(request, response);
		expect(response).to.exist;
		expect(response).to.be.not.empty;
	});

});