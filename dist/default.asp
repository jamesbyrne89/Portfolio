<%EnableSessionState=False

host = Request.ServerVariables("HTTP_HOST")



if host = "jamestbyrne.com" or host = "www.jamestbyrne.com" then

response.redirect("https://www.jamestbyrne.com/")



else

response.redirect("https://www.jamestbyrne.com/error.htm")



end if

%>