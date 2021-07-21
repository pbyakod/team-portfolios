function engineerHTML(name, position, employee_id, email_address, github_id) {
    return `
    <div class="card employee-card">
        <div class="card-header bg-primary text-light">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${position}</h3>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: ${employee_id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email_address}">${email_address}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${github_id}" target="_blank" rel="noopener noreferrer">${github_id}</a></li>
            </ul>
        </div>
    </div>
    `
}
  
module.exports = engineerHTML;