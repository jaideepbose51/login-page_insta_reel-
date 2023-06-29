let i=0;
document.querySelector(".signin").addEventListener("click",function()
{
    if(i%2==0)
    {
        document.querySelector(".main").style.flexDirection ="row-reverse";
        document.querySelector(".welcome_back").innerHTML="Hello, Friends";
        document.querySelector(".text").innerHTML="Enter your personal details and start with us.";
        document.querySelector(".signin").innerHTML="Sign Up";
        document.querySelector(".create").innerHTML="Sign In";
        document.querySelector(".OTP").innerHTML="Sign In";

        i++;
    }

    else   
    {
        document.querySelector(".main").style.flexDirection ="row";
        document.querySelector(".welcome_back").innerHTML="Welcome Friends";
        document.querySelector(".text").innerHTML="To keep connected with us please login with your info."
        document.querySelector(".signin").innerHTML="Sign In";
        document.querySelector(".create").innerHTML="Create Account";
        document.querySelector(".OTP").innerHTML="Request OTP";

        i++;
    }
    





    if (i==100)
    {
        i=0;
    }
});


