function inviteRegister(userName, groupName, link) {
  return `
    
    <!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Confirmação de Conta</title>
  </head>
  <div
    marginwidth="0"
    marginheight="0"
    style="
      margin: 0;
      padding: 100px 0px;
      font-family: 'ProximaNova', sans-serif;
      height: 100% !important;
      background-color: #f5f5f5;
    "
  >
    <center class="m_5203918459181512414container">
      <table
        style="
          width: 620px;
          margin: 0;
          padding: 0;
          font-family: 'ProximaNova', sans-serif;
          border-collapse: collapse !important;
          height: 100% !important;
          background: #ffffff;
          border: 1px solid #e7e7ec;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        "
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        height="100%"
        width="100%"
        id="m_5203918459181512414bodyTable"
      >
        <tbody>
          <tr>
            <td
              align="center"
              valign="top"
              id="m_5203918459181512414bodyCell"
              style="
                margin: 0;
                padding-top: 20px;
                padding-bottom: 20px;
                font-family: 'ProximaNova', sans-serif;
                height: 100% !important;
              "
            >
              <div>
                <div
                  style="
                    text-align: center;
                    border-bottom: 1px solid #e7e7ec;
                    padding-left: 68px;
                    padding-right: 68px;
                  "
                >
                  <h1 class="m_5203918459181512414header">
                    <img
                      src="https://i.ibb.co/N7z63Hm/Logo.png"
                      style="width: 200px"
                      alt="Branding"
                      border="0"
                    />
                  </h1>
                </div>
                <h2 style="padding-top: 20px">Olá, <b> ${userName}</b></h2>
                <p
                  style="
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    justify-content: center;
                    padding-top: 15px;
                  "
                >
                  Você foi convidado para o grupo ${groupName}.
                </p>

                <p
                  style="
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    text-align: center;
                    justify-content: center;
                    padding-bottom: 20px;
                  "
                >
                  Para completar seu cadastro, clique no botão abaixo.
                </p>

                <div style="margin-right: 68px; margin-left: 68px">
                  <a
                    href="${link}"
                    style="
                      display: inline-block;
                      padding-top: 14px;
                      padding-bottom: 14px;
                      background-color: #052240;
                      color: #fff;
                      text-decoration: none;
                      border-radius: 5px;
                      font-size: 18px;
                      line-height: 24px;
                      font-weight: 700;
                      width: 100%;
                      margin-bottom: 20px;
                    "
                    >Clique aqui para completar seu cadastro.</a
                  >
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
  </div>
</html>


`;
}
