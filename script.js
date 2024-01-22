var allStudents = []
function submit() {
    var firstname = document.getElementById('firstname').value
    var lastname = document.getElementById('lastname').value
    var mailphone = document.getElementById('mailphone').value
    var password = document.getElementById('password').value

    if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
        empty.style.display = 'block'
        setTimeout(()=>{
            empty.style.display ='none'
        }, 3000);
    } else {
        let confirmation = confirm('Are you sure you want to submit')
        if (confirmation == true) {

            var studentObj = {firstname,lastname,mailphone,password}
            var  pushedStudents = allStudents.push(studentObj)
    
            if (pushedStudents) {
                success.style.display = 'block'
                // setTimeout(()=>{
                //     success.style.display = 'none'
                // }, 3000);
                localStorage.setItem('allstudents', JSON.stringify(allStudents))
                window.location.href = 'dashboard.html'
                
            } else {
                alert('Failed to submit')
            }
            
            console.log(allStudents);
        
            document.getElementById('firstname').value = ''
            document.getElementById('lastname').value = ''
            document.getElementById('mailphone').value = ''
            document.getElementById('password').value = ''
           
            } else {
                alert ('RECHECK')
            }
        }
}

function loady() {
        firstname.value = ''
        lastname.value = ''
        mailphone.value = ''
        password.value = ''
       
        table.innerHTML = `
        <tr>
        <th>S/N</th>
        <th>FIRSTNAME</th>
        <th>LASTNAME</th>
        <th>EMAIL</th>
        <th>ACTION</th>
        </tr>
        `

        for (index = 0; index < allStudents.length; index++) {
            table.innerHTML += `
            <tr>
            <th>${index + 1}</th>
            <th>${allStudents[index].firstname}</th>
            <th>${allStudents[index].lastname}</th>
            <th>${allStudents[index].mailphone}</th>
            <th>
            <button class="btn btn-danger" onclick="del(${index})">DELETE</button>
            <button class="btn btn-info" onclick="edt(${index})">EDIT</button>
            </th>
            </tr>`

        }
}

function del(de) {
    allStudents.splice(de, 1)
    loady()
}

function edt(edited) {
    let editedItem = prompt('Enter new item')
    allStudents.splice(edited, 1, editedItem)
    loady()
}



// var allStudents = []
// function submit() {
//     var firstname = document.getElementById('firstname').value
//     var lastname = document.getElementById('lastname').value
//     var mailphone = document.getElementById('mailphone').value
//     var password = document.getElementById('password').value

//     if (firstname === '' || lastname === '' || mailphone === '' || password === '') {
//         emptyErrorMessage.style.display = 'block'
//         setTimeout(() => {
//             emptyErrorMessage.style.display = 'none'
//         }, 5000);
//     } else {
//         var studentObj = {firstname,lastname,mailphone,password}
//         var pushedStudent = allStudents.push(studentObj)
//         if(pushedStudent) {
//             successMessage.style.display = 'block'
//             setTimeout(()=>{
//             successMessage.style.display = 'none'
//             }, 3000)
//         } else {
//             alert('failed to submit')
//         }
//         console.log(allStudents);
    
//         document.getElementById('firstname').value = ''
//         document.getElementById('lastname').value = ''
//         document.getElementById('mailphone').value = ''
//         document.getElementById('password').value = ''
//     }
// }