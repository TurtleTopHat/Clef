// GET comments
function getComments()
{
    console.log("Function called");
    var xhr = new XMLHttpRequest();
    console.log(location.hostname)
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        xhr.open('GET', 'http://localhost:5001/clef-11304/us-central1');
        }
        else {
            xhr.open('GET', 'https://us-central1-mymediocreapp-f1ac2.cloudfunctions.net/getcomments');

        }
        
    
// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                var sHTML = "";
                var response=xhr.responseText;
                var data = null;
                //var data = JSON.parse(xhr.responseText);
                if(response!=null)
                {
                    data = JSON.parse(response);
                }
                else
                {
                    comments.innerHTML = "";
                    return;
                }
                
                    
                var user = firebase.auth().currentUser;
                 
                    if(user)
                    {
                        db.collection('users').doc(user.uid).get().then(doc => {
                            var  userNAME=`${doc.data().userName}` 
                        for(var i=0; i<data.length; i++)
                        {
                            sHTML += "<tr> <td><p>" + data[i].handle+ "</p></td>";
                            sHTML += "<td><p>" + data[i].comment+ "</p></td>";
                            var handle=data[i].handle;
                            var id=data[i].id;
                            if(userNAME==handle){
                                sHTML += "<td> <button onclick=deletecomment(" + "'" + id + "'" + ")>Delete Comment</button></td>";                       
                        
                            }
                            else{
                                sHTML +="<td></td>";
                            }
                            sHTML +="</tr>";
                            comments.innerHTML = sHTML;
                      }
                          
                          });
                    }
                    else{
                        for(var i=0; i<data.length; i++)
                        {
                            sHTML += "<tr> <td><p>" + data[i].handle+ "</p></td>";
                            sHTML += "<td><p>" + data[i].comment+ "</p></td>";
                                sHTML +="<td></td>";
                            sHTML +="</tr>";
                            comments.innerHTML = sHTML;
                      };
                    }
                      
                    
                
                
                
                //comments.innerHTML=data;
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }}
    };
    // Send the request to https://us-central1-my-cool-web-app-37271.cloudfunctions.net/getcomments
    xhr.send(null);
}

//setInterval(getComments, 1000);
