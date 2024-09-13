// get references to the form and display area

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayelement = document.getElementById('resume-display') as HTMLDivElement

//  HANDLE fORM SUBMISSION
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();//prevent page reload

        //collect input values
        const name=(document.getElementById('name') as HTMLInputElement).value
        const email=(document.getElementById('email') as HTMLInputElement).value
        const phone=(document.getElementById('phone') as HTMLInputElement).value
        const education=(document.getElementById('education') as HTMLInputElement).value
        const experience=(document.getElementById('experience') as HTMLInputElement).value
        const skills=(document.getElementById('skills') as HTMLInputElement).value

        // resume generate dynamically
        const resumeHtml=`
        <h2><b>Editable Resume</b></h2>
        <h3>Personal Infromation</h3>
        <p><b>Name :</b><span contentdeitable="true"> ${name}</span></p>
        <p><b>Email : </b><span contentdeitable="true"> ${email}</span></p>
        <p><b>Phone : </b><span contentdeitable="true"> ${phone}</span></p>

        <h3>Education</h3>
        <p contentdeitable="true">${education}</p>
         <h3>Experience</h3>
        <p contentdeitable="true">${experience}</p>
         <h3>Skills</h3>
        <p contentdeitable="true">${skills}</p>
        `;
        //display generated Resume
        if(resumeDisplayelement) {
            resumeDisplayelement.innerHTML = resumeHtml
        } else {
            console.error('The Resume Display Element is Missing.')
        }
    })