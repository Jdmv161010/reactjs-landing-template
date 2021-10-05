import React from "react";
import { useSelector } from "react-redux";
import "./Contact.scss";

export const Contact = () => {
  const { Footer } = useSelector((state) => state.lenguage);
  return (
    <div className="custom-block-contact">
      <div id="Contact" className="custom-content-section">
        <div className="custom-contact-info" style={{ flex: 1 }}>
          <span className="custom-contact-title" style={{ flex: 0.5 }}>
            Intelecto S.A.S.
          </span>
          <div className="custom-contact-location" style={{ flex: 2.5 }}>
            <span>
              <a
                target="_blank"
                href="https://img1.wsimg.com/blobby/go/9d5f89f5-7868-49b1-bc4c-48a2c35d2dec/downloads/Politica%20tratamiento%20de%20datos%20Intelecto%20SAS%20(0.pdf?ver=1602622795171"
                alt="Política de tratamiento de datos Inteleco SAS (pdf)"
              >
                {Footer.Politics}
              </a>
            </span>

            <span>{Footer.Contact}: (+57) 3147943431</span>

            <span>{Footer.Address}</span>

            <span>Cali, Valle del Cauca, Colombia</span>
          </div>
        </div>

        <div
          className="custom-contact-info"
          style={{ alignItems: "center", flex: 1 }}
        >
          <span className="custom-contact-title" style={{ flex: 0.5 }}>
            {Footer.item2}
          </span>
          <div className="custom-contact-location" style={{ flex: 2.5 }}>
            <li>
              <a target="_blank" href="https://adsecurity.co/">
                Ad - Security{" "}
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.xrm.com.co/">
                xRM
              </a>
            </li>
          </div>
        </div>
        <div
          className="custom-contact-info"
          style={{ alignItems: "flex-end", flex: 1 }}
        >
          <span className="custom-contact-title" style={{ flex: 0.5 }}>
            {Footer.item3}
          </span>
          <div id="Icono" style={{ flex: 2 }}>
            <a
              target="_blank"
              get
              href="https://www.linkedin.com/in/intelecto-soluciones-y-tecnolog%C3%ADa-b134a364/"
            >
              <img
                width="60"
                heigth="60"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzYzMjgxIDAtMjU2IDExNC42MzY3MTktMjU2IDI1NnMxMTQuNjM2NzE5IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjM2NzE5IDI1Ni0yNTYtMTE0LjYzNjcxOS0yNTYtMjU2LTI1NnptLTc0LjM5MDYyNSAzODdoLTYyLjM0NzY1NnYtMTg3LjU3NDIxOWg2Mi4zNDc2NTZ6bS0zMS4xNzE4NzUtMjEzLjE4NzVoLS40MDYyNWMtMjAuOTIxODc1IDAtMzQuNDUzMTI1LTE0LjQwMjM0NC0zNC40NTMxMjUtMzIuNDAyMzQ0IDAtMTguNDA2MjUgMTMuOTQ1MzEzLTMyLjQxMDE1NiAzNS4yNzM0MzctMzIuNDEwMTU2IDIxLjMyODEyNiAwIDM0LjQ1MzEyNiAxNC4wMDM5MDYgMzQuODU5Mzc2IDMyLjQxMDE1NiAwIDE4LTEzLjUzMTI1IDMyLjQwMjM0NC0zNS4yNzM0MzggMzIuNDAyMzQ0em0yNTUuOTg0Mzc1IDIxMy4xODc1aC02Mi4zMzk4NDR2LTEwMC4zNDc2NTZjMC0yNS4yMTg3NS05LjAyNzM0My00Mi40MTc5NjktMzEuNTg1OTM3LTQyLjQxNzk2OS0xNy4yMjI2NTYgMC0yNy40ODA0NjkgMTEuNjAxNTYzLTMxLjk4ODI4MiAyMi44MDA3ODEtMS42NDg0MzcgNC4wMDc4MTMtMi4wNTA3ODEgOS42MDkzNzUtMi4wNTA3ODEgMTUuMjE0ODQ0djEwNC43NWgtNjIuMzQzNzVzLjgxNjQwNy0xNjkuOTc2NTYyIDAtMTg3LjU3NDIxOWg2Mi4zNDM3NXYyNi41NTg1OTRjOC4yODUxNTctMTIuNzgxMjUgMjMuMTA5Mzc1LTMwLjk2MDkzNyA1Ni4xODc1LTMwLjk2MDkzNyA0MS4wMTk1MzEgMCA3MS43NzczNDQgMjYuODA4NTkzIDcxLjc3NzM0NCA4NC40MjE4NzR6bTAgMCIgZmlsbD0iIzA1YzdmMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              />
            </a>
            <a
              target="_blank"
              get
              href="https://www.facebook.com/Intelecto.co/"
            >
              <img
                width="60"
                heigth="60"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTUxMiAyNTZjMC0xNDEuNC0xMTQuNi0yNTYtMjU2LTI1NnMtMjU2IDExNC42LTI1NiAyNTYgMTE0LjYgMjU2IDI1NiAyNTZjMS41IDAgMyAwIDQuNS0uMXYtMTk5LjJoLTU1di02NC4xaDU1di00Ny4yYzAtNTQuNyAzMy40LTg0LjUgODIuMi04NC41IDIzLjQgMCA0My41IDEuNyA0OS4zIDIuNXY1Ny4yaC0zMy42Yy0yNi41IDAtMzEuNyAxMi42LTMxLjcgMzEuMXY0MC44aDYzLjVsLTguMyA2NC4xaC01NS4ydjE4OS41YzEwNy0zMC43IDE4NS4zLTEyOS4yIDE4NS4zLTI0Ni4xeiIgZmlsbD0iIzA1YzdmMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L3N2Zz4="
              />
            </a>
            <a
              target="_blank"
              get
              href="https://www.instagram.com/intelecto.co/"
            >
              <img
                width="60"
                heigth="60"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTMwNSAyNTZjMCAyNy4wNjI1LTIxLjkzNzUgNDktNDkgNDlzLTQ5LTIxLjkzNzUtNDktNDkgMjEuOTM3NS00OSA0OS00OSA0OSAyMS45Mzc1IDQ5IDQ5em0wIDAiIGZpbGw9IiMwNWM3ZjIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0zNzAuNTkzNzUgMTY5LjMwNDY4OGMtMi4zNTU0NjktNi4zODI4MTMtNi4xMTMyODEtMTIuMTYwMTU3LTEwLjk5NjA5NC0xNi45MDIzNDQtNC43NDIxODctNC44ODI4MTMtMTAuNTE1NjI1LTguNjQwNjI1LTE2LjkwMjM0NC0xMC45OTYwOTQtNS4xNzk2ODctMi4wMTE3MTktMTIuOTYwOTM3LTQuNDA2MjUtMjcuMjkyOTY4LTUuMDU4NTk0LTE1LjUwMzkwNi0uNzA3MDMxLTIwLjE1MjM0NC0uODU5Mzc1LTU5LjQwMjM0NC0uODU5Mzc1LTM5LjI1MzkwNiAwLTQzLjkwMjM0NC4xNDg0MzgtNTkuNDAyMzQ0Ljg1NTQ2OS0xNC4zMzIwMzEuNjU2MjUtMjIuMTE3MTg3IDMuMDUwNzgxLTI3LjI5Mjk2OCA1LjA2MjUtNi4zODY3MTkgMi4zNTU0NjktMTIuMTY0MDYzIDYuMTEzMjgxLTE2LjkwMjM0NCAxMC45OTYwOTQtNC44ODI4MTMgNC43NDIxODctOC42NDA2MjUgMTAuNTE1NjI1LTExIDE2LjkwMjM0NC0yLjAxMTcxOSA1LjE3OTY4Ny00LjQwNjI1IDEyLjk2NDg0My01LjA1ODU5NCAyNy4yOTY4NzQtLjcwNzAzMSAxNS41LS44NTkzNzUgMjAuMTQ4NDM4LS44NTkzNzUgNTkuNDAyMzQ0IDAgMzkuMjUuMTUyMzQ0IDQzLjg5ODQzOC44NTkzNzUgNTkuNDAyMzQ0LjY1MjM0NCAxNC4zMzIwMzEgMy4wNDY4NzUgMjIuMTEzMjgxIDUuMDU4NTk0IDI3LjI5Mjk2OSAyLjM1OTM3NSA2LjM4NjcxOSA2LjExMzI4MSAxMi4xNjAxNTYgMTAuOTk2MDk0IDE2LjkwMjM0MyA0Ljc0MjE4NyA0Ljg4MjgxMyAxMC41MTU2MjQgOC42NDA2MjYgMTYuOTAyMzQzIDEwLjk5NjA5NCA1LjE3OTY4OCAyLjAxNTYyNSAxMi45NjQ4NDQgNC40MTAxNTYgMjcuMjk2ODc1IDUuMDYyNSAxNS41LjcwNzAzMiAyMC4xNDQ1MzIuODU1NDY5IDU5LjM5ODQzOC44NTU0NjkgMzkuMjU3ODEyIDAgNDMuOTA2MjUtLjE0ODQzNyA1OS40MDIzNDQtLjg1NTQ2OSAxNC4zMzIwMzEtLjY1MjM0NCAyMi4xMTcxODctMy4wNDY4NzUgMjcuMjk2ODc0LTUuMDYyNSAxMi44MjAzMTMtNC45NDUzMTIgMjIuOTUzMTI2LTE1LjA3ODEyNSAyNy44OTg0MzgtMjcuODk4NDM3IDIuMDExNzE5LTUuMTc5Njg4IDQuNDA2MjUtMTIuOTYwOTM4IDUuMDYyNS0yNy4yOTI5NjkuNzA3MDMxLTE1LjUwMzkwNi44NTU0NjktMjAuMTUyMzQ0Ljg1NTQ2OS01OS40MDIzNDQgMC0zOS4yNTM5MDYtLjE0ODQzOC00My45MDIzNDQtLjg1NTQ2OS01OS40MDIzNDQtLjY1MjM0NC0xNC4zMzIwMzEtMy4wNDY4NzUtMjIuMTE3MTg3LTUuMDYyNS0yNy4yOTY4NzR6bS0xMTQuNTkzNzUgMTYyLjE3OTY4N2MtNDEuNjkxNDA2IDAtNzUuNDg4MjgxLTMzLjc5Mjk2OS03NS40ODgyODEtNzUuNDg0Mzc1czMzLjc5Njg3NS03NS40ODQzNzUgNzUuNDg4MjgxLTc1LjQ4NDM3NWM0MS42ODc1IDAgNzUuNDg0Mzc1IDMzLjc5Mjk2OSA3NS40ODQzNzUgNzUuNDg0Mzc1cy0zMy43OTY4NzUgNzUuNDg0Mzc1LTc1LjQ4NDM3NSA3NS40ODQzNzV6bTc4LjQ2ODc1LTEzNi4zMTI1Yy05Ljc0MjE4OCAwLTE3LjY0MDYyNS03Ljg5ODQzNy0xNy42NDA2MjUtMTcuNjQwNjI1czcuODk4NDM3LTE3LjY0MDYyNSAxNy42NDA2MjUtMTcuNjQwNjI1IDE3LjY0MDYyNSA3Ljg5ODQzNyAxNy42NDA2MjUgMTcuNjQwNjI1Yy0uMDAzOTA2IDkuNzQyMTg4LTcuODk4NDM3IDE3LjY0MDYyNS0xNy42NDA2MjUgMTcuNjQwNjI1em0wIDAiIGZpbGw9IiMwNWM3ZjIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bTE0Ni4xMTMyODEgMzE2LjYwNTQ2OWMtLjcxMDkzNyAxNS42NDg0MzctMy4xOTkyMTkgMjYuMzMyMDMxLTYuODMyMDMxIDM1LjY4MzU5My03LjYzNjcxOSAxOS43NDYwOTQtMjMuMjQ2MDk0IDM1LjM1NTQ2OS00Mi45OTIxODggNDIuOTkyMTg4LTkuMzQ3NjU2IDMuNjMyODEyLTIwLjAzNTE1NiA2LjExNzE4OC0zNS42Nzk2ODcgNi44MzIwMzEtMTUuNjc1NzgxLjcxNDg0NC0yMC42ODM1OTQuODg2NzE5LTYwLjYwNTQ2OS44ODY3MTktMzkuOTI1NzgxIDAtNDQuOTI5Njg3LS4xNzE4NzUtNjAuNjA5Mzc1LS44ODY3MTktMTUuNjQ0NTMxLS43MTQ4NDMtMjYuMzMyMDMxLTMuMTk5MjE5LTM1LjY3OTY4Ny02LjgzMjAzMS05LjgxMjUtMy42OTE0MDYtMTguNjk1MzEzLTkuNDc2NTYyLTI2LjAzOTA2My0xNi45NTcwMzEtNy40NzY1NjItNy4zMzk4NDQtMTMuMjYxNzE5LTE2LjIyNjU2My0xNi45NTMxMjUtMjYuMDM1MTU3LTMuNjMyODEyLTkuMzQ3NjU2LTYuMTIxMDk0LTIwLjAzNTE1Ni02LjgzMjAzMS0zNS42Nzk2ODctLjcyMjY1Ni0xNS42Nzk2ODctLjg5MDYyNS0yMC42ODc1LS44OTA2MjUtNjAuNjA5Mzc1cy4xNjc5NjktNDQuOTI5Njg4Ljg4NjcxOS02MC42MDU0NjljLjcxMDkzNy0xNS42NDg0MzcgMy4xOTUzMTItMjYuMzMyMDMxIDYuODI4MTI1LTM1LjY4MzU5MyAzLjY5MTQwNi05LjgwODU5NCA5LjQ4MDQ2OC0xOC42OTUzMTMgMTYuOTYwOTM3LTI2LjAzNTE1NyA3LjMzOTg0NC03LjQ4MDQ2OSAxNi4yMjY1NjMtMTMuMjY1NjI1IDI2LjAzNTE1Ny0xNi45NTcwMzEgOS4zNTE1NjItMy42MzI4MTIgMjAuMDM1MTU2LTYuMTE3MTg4IDM1LjY4MzU5My02LjgzMjAzMSAxNS42NzU3ODEtLjcxNDg0NCAyMC42ODM1OTQtLjg4NjcxOSA2MC42MDU0NjktLjg4NjcxOXM0NC45Mjk2ODguMTcxODc1IDYwLjYwNTQ2OS44OTA2MjVjMTUuNjQ4NDM3LjcxMDkzNyAyNi4zMzIwMzEgMy4xOTUzMTMgMzUuNjgzNTkzIDYuODI0MjE5IDkuODA4NTk0IDMuNjkxNDA2IDE4LjY5NTMxMyA5LjQ4MDQ2OCAyNi4wMzkwNjMgMTYuOTYwOTM3IDcuNDc2NTYzIDcuMzQzNzUgMTMuMjY1NjI1IDE2LjIyNjU2MyAxNi45NTMxMjUgMjYuMDM1MTU3IDMuNjM2NzE5IDkuMzUxNTYyIDYuMTIxMDk0IDIwLjAzNTE1NiA2LjgzNTkzOCAzNS42ODM1OTMuNzE0ODQzIDE1LjY3NTc4MS44ODI4MTIgMjAuNjgzNTk0Ljg4MjgxMiA2MC42MDU0NjlzLS4xNjc5NjkgNDQuOTI5Njg4LS44ODY3MTkgNjAuNjA1NDY5em0wIDAiIGZpbGw9IiMwNWM3ZjIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+"
              />
            </a>
            <a target="_blank" href="https://twitter.com/IntelectoLtda">
              <img
                width="60"
                heigth="60"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1NiAwYy0xNDEuMzYzMjgxIDAtMjU2IDExNC42MzY3MTktMjU2IDI1NnMxMTQuNjM2NzE5IDI1NiAyNTYgMjU2IDI1Ni0xMTQuNjM2NzE5IDI1Ni0yNTYtMTE0LjYzNjcxOS0yNTYtMjU2LTI1NnptMTE2Ljg4NjcxOSAxOTkuNjAxNTYyYy4xMTMyODEgMi41MTk1MzIuMTY3OTY5IDUuMDUwNzgyLjE2Nzk2OSA3LjU5Mzc1IDAgNzcuNjQ0NTMyLTU5LjEwMTU2MyAxNjcuMTc5Njg4LTE2Ny4xODM1OTQgMTY3LjE4MzU5NGguMDAzOTA2LS4wMDM5MDZjLTMzLjE4MzU5NCAwLTY0LjA2MjUtOS43MjY1NjItOTAuMDY2NDA2LTI2LjM5NDUzMSA0LjU5NzY1Ni41NDI5NjkgOS4yNzczNDMuODEyNSAxNC4wMTU2MjQuODEyNSAyNy41MzEyNSAwIDUyLjg2NzE4OC05LjM5MDYyNSA3Mi45ODA0NjktMjUuMTUyMzQ0LTI1LjcyMjY1Ni0uNDc2NTYyLTQ3LjQxMDE1Ni0xNy40NjQ4NDMtNTQuODk0NTMxLTQwLjgxMjUgMy41ODIwMzEuNjg3NSA3LjI2NTYyNSAxLjA2MjUgMTEuMDQyOTY5IDEuMDYyNSA1LjM2MzI4MSAwIDEwLjU1ODU5My0uNzIyNjU2IDE1LjQ5NjA5My0yLjA3MDMxMi0yNi44ODY3MTgtNS4zODI4MTMtNDcuMTQwNjI0LTI5LjE0NDUzMS00Ny4xNDA2MjQtNTcuNTk3NjU3IDAtLjI2NTYyNCAwLS41MDM5MDYuMDA3ODEyLS43NSA3LjkxNzk2OSA0LjQwMjM0NCAxNi45NzI2NTYgNy4wNTA3ODIgMjYuNjEzMjgxIDcuMzQ3NjU3LTE1Ljc3NzM0My0xMC41MjczNDQtMjYuMTQ4NDM3LTI4LjUyMzQzOC0yNi4xNDg0MzctNDguOTEwMTU3IDAtMTAuNzY1NjI0IDIuOTEwMTU2LTIwLjg1MTU2MiA3Ljk1NzAzMS0yOS41MzUxNTYgMjguOTc2NTYzIDM1LjU1NDY4OCA3Mi4yODEyNSA1OC45Mzc1IDEyMS4xMTcxODcgNjEuMzk0NTMyLTEuMDA3ODEyLTQuMzA0Njg4LTEuNTI3MzQzLTguNzg5MDYzLTEuNTI3MzQzLTEzLjM5ODQzOCAwLTMyLjQzNzUgMjYuMzE2NDA2LTU4Ljc1MzkwNiA1OC43NjU2MjUtNTguNzUzOTA2IDE2LjkwMjM0NCAwIDMyLjE2Nzk2OCA3LjE0NDUzMSA0Mi44OTA2MjUgMTguNTY2NDA2IDEzLjM4NjcxOS0yLjY0MDYyNSAyNS45NTcwMzEtNy41MzEyNSAzNy4zMTI1LTE0LjI2MTcxOS00LjM5NDUzMSAxMy43MTQ4NDQtMTMuNzA3MDMxIDI1LjIyMjY1Ny0yNS44Mzk4NDQgMzIuNSAxMS44ODY3MTktMS40MjE4NzUgMjMuMjE0ODQ0LTQuNTc0MjE5IDMzLjc0MjE4Ny05LjI1MzkwNi03Ljg2MzI4MSAxMS43ODUxNTYtMTcuODM1OTM3IDIyLjEzNjcxOS0yOS4zMDg1OTMgMzAuNDI5Njg3em0wIDAiIGZpbGw9IiMwNWM3ZjIiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+"
              />
            </a>
          </div>
        </div>
      </div>
      <span className="custom-copyright">{Footer.Copyright}</span>
    </div>
  );
};
