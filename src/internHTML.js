function internHTML(name, position, employee_id, email_address, school_name) {
    return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${position}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee_id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email_address}">${email_address}</a></li>
                <li class="list-group-item">School: ${school_name}</li>
            </ul>
        </div>
    </div>
    `
}
  
module.exports = internHTML;

