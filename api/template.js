 module.exports = (occurence , report,ReportCreatedBy) => {
    let { av_garison , occurance_Number, ClosedBy , MadeBy ,Request,Description } = occurence
    let {formFields ,description} =report
   
    console.log("formFields",formFields)
    let occurence_code_to_display = occurance_Number.toString().padStart(4, '0');

    const date = new Date;
    const formattedDate = date.toLocaleDateString()
    const time = date.toLocaleTimeString()
    
    // Sample data
    const sampleData = {
        applicant: [
            { label: "Nome", data: `${occurence.Applicant}` },
            { label: "CPF", data: `${occurence.Reference}` },
            { label: "Telefone", data: `${occurence.phone}` },
            { label: "Rua", data: `${occurence.Street}` },
            { label: "Bairro", data: `${occurence.Neighbourhood}` },
            { label: "Cidade", data: `${occurence.City}` },
            { label: "Código de ocorrência", data: `${occurence.occurance_Code}` }
        ],
        garrison: [
            ...av_garison
        ],
        peopleInvolved: [
            ...formFields
        ]
    };

    // Function to dynamically populate the applicant table
    function populateApplicantTable(data) {
        let rowsHtml = '';
        data.forEach(entry => {
            rowsHtml += `<tr><td>${entry.label}</td><td>${entry.data}</td></tr>`;
        });
        return rowsHtml;
    }

    // Function to dynamically populate the garrison table
    function populateGarrisonTable(data) {

        let rowsHtml = '';
        data.forEach(entry => {
            const Arrivaldate = new Date(entry.ArrivalTime);
            const Departuredate = new Date(entry.DispachTime);
            const formattedDate =(date)=>(
                date.toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            }))
            const formattedTime=(date)=>(
                date.toLocaleTimeString()
            )
            const Diiference_Total_Millisencond = (Arrivaldate - Departuredate) / 1000
            let hours = Math.floor(Diiference_Total_Millisencond / 3600);
            let remainingSeconds = Diiference_Total_Millisencond % 3600;
            let minutes = Math.floor(remainingSeconds / 60);
            let TimeDifference = hours + "h:" + minutes  +"m:"+ Math.floor(remainingSeconds) +"s"
            rowsHtml += `<tr><td>${entry.garissonName}</td><td>${TimeDifference}</td><td>${formattedDate(Arrivaldate)} - ${formattedTime(Arrivaldate)} </td><td>${formattedDate(Departuredate)} - ${formattedTime(Departuredate)}</td></tr>`;
        });
        return rowsHtml;
    }

    // Function to dynamically populate the people involved tables
    function populatePeopleInvolvedTables(data) {
        let tablesHtml = '';
        data.forEach(person => {
            tablesHtml += `
                <table class="people-involved-table">
                    <thead><tr><th>Envolvimento</th><th>${person.person}</th></tr></thead>
                    <tbody><tr><td>Nome</td><td>${person.name}</td></tr></tbody>
                    <tbody><tr><td>CPF</td><td>${person.cpf}</td></tr></tbody>
                    <tbody><tr><td>telefone</td><td>${person.phone}</td></tr></tbody>
                    <tbody><tr><td>Rua</td><td>${person.street}</td></tr></tbody>
                    <tbody><tr><td>Bairro</td><td>${person.Neighborhood}</td></tr></tbody>
                    <tbody><tr><td>Cidade</td><td>${person.City}</td></tr></tbody>
                </table>
            `;
        });
        return tablesHtml;
    }

    // HTML template with dynamic sample data and full styling
    const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Occurrence Report</title>
            <style>
                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }
    
                html,
                body {
                    font-family: Arial, sans-serif;
                }
    
                .report-wrapper {
                    padding: 20px;
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                }
    
                .header {
                    overflow: auto;
                    /* Clear floats */
                    margin-bottom: 20px;
                }
        
                .header .header-left{
                    float: left;
                }
        
                .header .header-right {
                    float: right;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
    
                th,
                td {
                    padding: 10px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
    
                th {
                    background-color: #f2f2f2;
                }
                .request{
                    padding:10px;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                }
                .RequestDescription,
                .ClosingDescription {
                    padding: 20px;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                }
    
                .RequestGenerator{
                    text-align:right;
                }
                .request,
                .RequestDescription,
                .ClosingDescription {
                    text-align:left ;
                }
    
                /* Media Queries */
                @media screen and (max-width: 768px) {
                    .report-wrapper {
                        padding: 10px;
                    }
    
    
                    table {
                        font-size: 14px;
                    }
    
                    .RequestDescription,
                    .request,
                    .ClosingDescription,
                    .RequestGenerator {
                        font-size: 14px;
                    }
                }
    
                /* Additional Styles */
                #PeopleInvolved-main {
                    margin-bottom: 20px;
                }
    
                .people-involved-table {
                    width: 100%;
                }
    
                .people-involved-table th,
                .people-involved-table td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                    width: 50%; /* Set a fixed width for each cell */
                }
    
                .people-involved-table th {
                    background-color: #f2f2f2;
                }
                .margin-top{
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <div class="report">
                <div class="report-wrapper">
                    <div class="header">
                        <div class="header-left">
                            <span><strong>Relatório da ocorrencia numero :</strong>${occurence_code_to_display}</span>
                        </div>
                        <div class="header-right">
                        <span><strong>Report Generated By:</strong> ${ReportCreatedBy}</span>
                        <span><strong>Data:</strong> ${formattedDate}</span>
                        <span><strong>Hora:</strong> ${time}</span>
                        </div>
                    </div>
        
                    <div class="main">
                        <!-- Applicant data -->
                        <div class="applicant">
                            <h2>Solicitante</h2>
                            <table id="applicant-table" class="margin-top">
                                <tr><th>Rótulo</th><th>Informação</th></tr>
                                ${populateApplicantTable(sampleData.applicant)}
                            </table>
                        </div>

                        <div id="Request">
                        <h2>Solicitação</h2>
                        <div class="request margin-top">
                            ${Request}
                        </div>
                        <label for="request-description">Descrever a solicitação</label>
                        <div class="RequestDescription margin-top">
                        <p>${Description}</p>
                        </div>
                        <div class="RequestGenerator">
                            <!-- Dynamic generator will be added here -->
                            <span>Gerado por : ${MadeBy}</span>
                        </div>
                    </div>

                        <!-- Garrison detail -->
                        <div class="garrison">
                            <h2>Guarnições empenhadas</h2>
                            <table id="garrison-table" class="margin-top">
                                <tr><th>Guarnição</th><th>Data/Hora Empenhada</th><th>Data/Hora Chegada</th><th>Data/Hora Saida</th></tr>
                                ${populateGarrisonTable(sampleData.garrison)}
                            </table>
                        </div>

                        <!-- Closing detail -->
                <div id="ClosingDescription">
                    <h2>Destritivo do encerramento</h2>
                    <div class="RequestDescription margin-top">
                       ${description}
                    </div>
                    <div class="RequestGenerator">
                        <!-- Dynamic generator will be added here -->
                        <span>Encerrado por : ${ClosedBy}</span>
                    </div>
                </div>

                        <!-- People involved -->
                        <div id="PeopleInvolved-main">
                            <h2>Pessoas Envolvidas</h2>
                            ${populatePeopleInvolvedTables(sampleData.peopleInvolved)}
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;

    return htmlTemplate;
};
