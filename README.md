<div style="display: flex; align-items: center; justify-content: center;">
  <img src="/src/assets/images/favicon.png" alt="Icon" width="50" height="50">

</div>
  <h2 align="center">MAKS HR Management System</h2>

  <p align="center" >
MAKS created for commercial companies for managing their human resource processes from one platform
    <br/>
    <br/>

### About This Project  

MAKS is a human resources application that includes four distinct roles: admin, company manager, employee, and guest. Each role is equipped with its own dashboard, profile, and pages tailored to their specific responsibilities.

When a company manager registers, their registration is subject to approval by the admin. Once approved, the company manager gains access to the system and can subsequently add employees to the system.

Employee profile page encompasses personal information, salary details, and shift schedules. The employee dashboard also provides information about public holidays and details about the company they are employed by.

Employees have the option to submit comments regarding their company, but these comments will only be published after receiving approval from the admin.

For company managers, there is a dedicated page with comprehensive information about their company's financial status, including income, expenses, and profit and loss data.

Guests who register with the application can access information and comments pertaining to all companies that are registered within the application.

### Screenshots
 <img src="/src/assets/images/employee_dashboard.png" alt="Icon" width="400">

- After registering in the system, you will receive an email.
##### Confirm Account
  <img src="/src/assets/images/confirm_account.png" alt="Icon" width="200" height="300">

##### Verification Successful
   <img src="/src/assets/images/verification_successful.png" alt="Icon" width="200" height="300">

##### Verification Failed
   <img src="/src/assets/images/verification_failed.png" alt="Icon" width="200" height="300">

### Technologies

- [MUI](https://mui.com/) - The React UI library for faster and easier web development.
- [React Countup](https://github.com/glennreyes/react-countup) - A lightweight React component that can be used to quickly create animations that display numerical data in a more interesting way.
- [React ChartJS 2](http://reactchartjs.github.io/react-chartjs-2/#/) - Simple yet flexible React charting for designers & developers.
- [ChromaJS](https://gka.github.io/chroma.js/) - A small-ish zero-dependency JavaScript library for all kinds of color conversions and color scales.
- [UUID](https://github.com/uuidjs/uuid) - JavaScript library for generating random id numbers.

### Scripts

- Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).

- Navigate to the root ./ directory of the product and run to install our local dependencies.
```
npm install
```
- Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.
```
npm start
```
- Axios Component for React with child function callback. This is intended to allow in render async requests.
```
npm install axios
```
### What's included

Within the download you'll find the following directories and files:

```
argon-dashboard-material-ui
    ├── public
    │   ├── favicon.png
    │   ├── index.html
    │   ├── manifest.json
    │   └── robots.txt
    ├── src
    │   ├── assets
    │   │   ├── css
    │   │   ├── fonts
    │   │   ├── images
    │   │   ├── theme
    │   │   │   ├── base
    │   │   │   ├── components
    │   │   │   ├── functions
    │   │   │   ├── index.js
    │   │   │   └── theme-rtl.js
    │   │   └── theme-dark
    │   │       ├── base
    │   │       ├── components
    │   │       ├── functions
    │   │       ├── index.js
    │   │       └── theme-rtl.js
    │   ├── components
    │   │   ├── ArgonAlert
    │   │   ├── ArgonAvatar
    │   │   ├── ArgonBadge
    │   │   ├── ArgonBox
    │   │   ├── ArgonButton
    │   │   ├── ArgonInput
    │   │   ├── ArgonPagination
    │   │   ├── ArgonProgress
    │   │   └── ArgonTypography
    │   ├── config
    │   │   └── apiUrls.js
    │   ├── context
    │   ├── examples
    │   │   ├── Breadcrumbs
    │   │   ├── Calendar
    │   │   ├── Cards
    │   │   ├── Charts
    │   │   ├── Configurator
    │   │   ├── Footer
    │   │   ├── Items
    │   │   ├── LayoutContainers
    │   │   ├── Lists
    │   │   ├── Navbars
    │   │   ├── Sidenav
    │   │   ├── Tables
    │   │   └── Timeline
    │   ├── layouts
    │   │   ├── authentication
    │   │   ├── company-manager
    │   │   ├── employee
    │   │   ├── admin
    │   │   ├── company-manager 
    │   │   ├── employee
    │   │   ├── guest 
    │   │   ├── billing
    │   │   ├── profile
    │   │   ├── dashboard
    │   │   ├── rtl
    │   │   ├── tables 
    │   │   └── virtual-reality 
    │   ├── App.js
    │   ├── index.js
    │   └── routes.js
    ├── .evn
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc.json
    ├── CHANGELOG.md
    ├── Dockerfile
    ├── ISSUE_TEMPLATE.md
    ├── jsconfig.json
    ├── package.json
    └── README.md
```
### Project Deployment
#### A Basic Dockerfile
```
FROM node:18.17.1-buster
COPY ./ /app
RUN apt-get update -y
RUN npm install -g serve
WORKDIR /app
EXPOSE 3000
ENTRYPOINT [ "npm","start" ]
```
#### Build an image from a Dockerfile
```
docker run -p 3000:3000 -d siinemvarol/react:v01 .
```
#### Google Cloud - Kubernetes Engine
- Deployment.yaml
```
kind: Deployment
metadata:
  name: deployment-react
spec:
  selector:
    matchLabels:
      app: deployment-pod-label-react
  template:
    metadata:
      labels:
        app: deployment-pod-label-react      
    spec:
      containers: 
      - name: react 
        image: siinemvarol/react:v01
        resources:
          requests:
            cpu: "100m"
            memory: "1024Mi"
          limits:
            cpu: "200m"
            memory: "2048Mi"
        ports: 
        - containerPort: 80
        - containerPort: 3000
```
- Service.yaml
```
kind: Service
metadata:
  name: loadbalancer-react-export-ip
  labels:
   app: reactwebservice
spec:
  selector:
    app: deployment-pod-label-react 
  type: LoadBalancer
  ports:
    - name: reactport
      port: 80
      targetPort: 3000
```
### Browser Support

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="40" height="40"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="40" height="40"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="40" height="40"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="40" height="40"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="40" height="40">

### Licensing

- Copyright 2023 [Creative Tim](https://www.creative-tim.com?ref=readme-admui)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-admui)

