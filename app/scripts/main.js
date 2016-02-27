var app = angular.module('ralphowino', []);

app.controller('repoCtrl', function($scope) {
	
	$scope.loginDetail = [{mailId:'pharxe@gmail.com',pwd:'Test@12345'}]
	var imagePath = 'images/1.jpeg';
	$scope.message = 'testphard';
	$scope.userPopup = false;
	$scope.showLogin = true;
	$scope.issuesDisplayDetails = false;
	$scope.array1 = [{
		issuesContent: ''
	}];
	
	$scope.call = function(i){		
		
		$scope.issuesDisplayDetails = true;		

		$scope.face = $scope.userList[i].face;
		$scope.firstName = $scope.userList[i].firstName;
		$scope.surName = $scope.userList[i].surName;
		$scope.city = $scope.userList[i].city;
		$scope.country = $scope.userList[i].country;
		$scope.nationality = $scope.userList[i].nationality;

	}
	
	

$scope.login = function(){	
	if($scope.userMail === $scope.loginDetail[0].mailId && $scope.userPass === $scope.loginDetail[0].pwd){		
		$scope.userPopup = true;
		$scope.showLogin = false;
		$scope.userMail = '';
		$scope.userPass ='';
	
		$scope.issuesDisplayDetails = false;
	}else{
		alert("login failed");
	}
	
}

$scope.initialize = function(){
	$scope.array1=[];
	console.log("inside displayIssue");
	for(var i=0;i<$scope.repoList.length;i++){
		$scope.repoListId = $scope.repoList[i].id
		$scope.valeur = $scope.displayIssueConuter(i);
	}
		console.log("inside displayIssue array final size"+$scope.valeur )
}

$scope.displayIssueConuter = function(index){
	
	$scope.array1=[];
	console.log("inside displayIssue");
	$scope.repoListId = $scope.repoList[index].id
	console.log("inside displayIssue repoListId "+$scope.repoListId);
	
		for(j=0;j<$scope.issuesList.length;j++){
			if($scope.repoListId==$scope.issuesList[j].repoId){
				console.log("inside displayIssue array "+$scope.issuesList[j].issuesContent);
				$scope.array1.push({issuesContent:$scope.issuesList[j].issuesContent});
    			console.log("inside displayIssue array "+$scope.array1.length +"----"+$scope.array1[0].issuesContent);
			}
			
		}
		console.log("inside displayIssue array final size"+$scope.array1.length )
		$scope.val = $scope.array1.length;
		return $scope.val
}

    $scope.displayIssue = function(index){
    	$scope.issuesDisplayDetails = true;	
    	$scope.showLogin = false;
    	$scope.array1=[];
    	console.log("inside displayIssue");
    	$scope.repoListId = $scope.repoList[index].id
    	console.log("inside displayIssue repoListId "+$scope.repoListId);
    	
    		for(j=0;j<$scope.issuesList.length;j++){
    			if($scope.repoListId==$scope.issuesList[j].repoId){
    				console.log("inside displayIssue array "+$scope.issuesList[j].issuesContent);
    				$scope.array1.push({issuesContent:$scope.issuesList[j].issuesContent});
        			console.log("inside displayIssue array "+$scope.array1.length +"----"+$scope.array1[0].issuesContent);
    			}
    			
    		}
    		console.log("inside displayIssue array final size"+$scope.array1.length )
    		$scope.val = $scope.array1.length;
    		return $scope.val
    }

	$scope.repoList = [

	                   {
	                	   id:1,	                	   
	                	   repotName: 'UI Issues',
	                	   valeur:$scope.valeur
	                	   
	                	   
	                   },
	                   {
	                	   id:2,
	                	   repotName : 'Laravel Issues',
	                	   valeur:$scope.valeur
	                   },
	                   {
	                	   id:3,
	                	   repotName : 'AngularJS Issues'
	                   },
	                   {
	                	   id:4,
	                	   repotName : 'Angular Material Issues'
	                   },
	                   {
	                	   id:5,
	                	   repotName : 'Bootstrap Issues'
	                   },
	                   {
	                	   id:6,
	                	   repotName : 'Date Picker Issues'
	                   }
	                   ];

	
	$scope.issuesList = [

	                   {
	                	   issueId:'IS1',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 1 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS2',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 2 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS3',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 3 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS4',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 4 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS5',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 5 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS6',
	                	   repoId: 2,
	                	   issuesContent: 'Issues 1 of list of Laravel Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS7',
	                	   repoId: 3,
	                	   issuesContent: 'Issues 1 of list of AngularJS Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS8',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 6 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS9',
	                	   repoId: 1,
	                	   issuesContent: 'Issues 7 of list of UI Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS10',
	                	   repoId: 2,
	                	   issuesContent: 'Issues 3 of list of Laravel Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS11',
	                	   repoId: 2,
	                	   issuesContent: 'Issues 4 of list of Laravel Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS12',
	                	   repoId: 2,
	                	   issuesContent: 'Issues 5 of list of Laravel Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS13',
	                	   repoId: 2,
	                	   issuesContent: 'Issues 6 of list of Laravel Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS14',
	                	   repoId: 3,
	                	   issuesContent: 'Issues 2 of list of AngularJS Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS15',
	                	   repoId: 3,
	                	   issuesContent: 'Issues 3 of list of AngularJS Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS16',
	                	   repoId: 3,
	                	   issuesContent: 'Issues 4 of list of AngularJS Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS17',
	                	   repoId: 4,
	                	   issuesContent: 'Issues 1 of list of Angular Material Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS18',
	                	   repoId: 4,
	                	   issuesContent: 'Issues 2 of list of Angular Material Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS19',
	                	   repoId: 4,
	                	   issuesContent: 'Issues 3 of list of Angular Material Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS20',
	                	   repoId: 4,
	                	   issuesContent: 'Issues 4 of list of Angular Material Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS21',
	                	   repoId: 4,
	                	   issuesContent: 'Issues 5 of list of Angular Material Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS22',
	                	   repoId: 5,
	                	   issuesContent: 'Issues 1 of list of Bootstrap Issues '
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS23',
	                	   repoId: 5,
	                	   issuesContent: 'Issues 2 of list of Bootstrap Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS24',
	                	   repoId: 5,
	                	   issuesContent: 'Issues 3 of list of Bootstrap Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS25',
	                	   repoId: 5,
	                	   issuesContent: 'Issues 4 of list of Bootstrap Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS26',
	                	   repoId: 5,
	                	   issuesContent: 'Issues 5 of list of Bootstrap Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS27',
	                	   repoId: 6,
	                	   issuesContent: 'Issues 1 of list of Date Picker Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS28',
	                	   repoId: 6,
	                	   issuesContent: 'Issues 2 of list of Date Picker Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS29',
	                	   repoId: 6,
	                	   issuesContent: 'Issues 3 of list of Date Picker Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS30',
	                	   repoId: 6,
	                	   issuesContent: 'Issues 4 of list of Date Picker Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS31',
	                	   repoId: 6,
	                	   issuesContent: 'Issues 5 of list of Date Picker Issues'
	                	   
	                	   
	                   },
	                   {
	                	   issueId:'IS32',
	                	   repoId: 6,
	                	   issuesContent: 'Issues 6 of list of Date Picker Issues'
	                	   
	                	   
	                   }
	                   ];

});