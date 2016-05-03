/**
 * Created by jgandi on 6/16/2015.
 */
angular.module("app",["ui.router"])
    .config(function config($stateProvider) {
        $stateProvider.state("main", {
            url: "",
            controller: "LoginCtrl as login",
            templateUrl: "login.html"
        })
        $stateProvider.state("login", {
            url: "/login",
            controller: "LoginCtrl as login",
            templateUrl: "login.html"
        })
        $stateProvider.state("signup", {
            url: "/signup",
            controller: "SignupCtrl as signup",
            templateUrl: "signup.html"
        })
        $stateProvider.state("loginpg", {
            url: "/loginpg",
            controller: "LoginpgCtrl as loginpg",
            templateUrl: "loginpg.html"
        })
        $stateProvider.state("signuppg", {
            url: "/signuppg",
            controller: "SignuppgCtrl as signuppg",
            templateUrl: "signuppg.html"
        })
    })
    .service("name",function Name()
    {
        var name=this;
        name.msg="";
    })
    .controller("LoginCtrl",function LoginCtrl()
    {
        var login=this;
    })
    .controller("SignupCtrl",function SignupCtrl(name)
    {
        var signup=this;
        signup.name=name;
    })
    .controller("LoginpgCtrl",function LoginCtrl()
    {
        var loginpg=this;
    })
    .controller("SignuppgCtrl",function SignuppgCtrl(name)
    {
        var signuppg=this;
        signuppg.name=name;
    })

