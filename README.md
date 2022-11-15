<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h2 align="center">Simple Lodde CLI App</h2>
  
  <!-- PROJECT SHIELDS -->
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  [![MIT License][license-shield]][license-url]
  [![LinkedIn][linkedin-shield]][linkedin-url]
  
  <p align="center">
    A simple cli-app that implement all the lodde's api wrapper functions!
    <br />
    <a href="https://github.com/reinhardjs/simple-lodde-cli-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/reinhardjs/simple-lodde-cli-app">View Demo</a>
    ·
    <a href="https://github.com/reinhardjs/simple-lodde-cli-app">Report Bug</a>
    ·
    <a href="https://github.com/reinhardjs/simple-lodde-cli-app">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
<p align="center">
  <img width="700" src="https://github.com/Reinhardjs/simple-lodde-cli-app/raw/main/images/screenshot.png" alt="cli output"/>
</p>

This is the simpe CLI-API built with chalk, boxen, figlet and yargs.
This cli app is using lodde api wrapper library to send http requests.

Learn the documentation bellow for the usage and commands available.



#### Built With

* [![Node.js][Node.js]][Node.js-url]



<!-- GETTING STARTED -->
## Getting Started

<div align="center">
  <a href="https://www.youtube.com/watch?v=AHEARo_5pko"><img src="https://img.youtube.com/vi/AHEARo_5pko/0.jpg" alt="IMAGE ALT TEXT"></a>
</div>

First of all, clone this repo :
```sh
git clone https://github.com/Reinhardjs/simple-lodde-cli-app
```

then `cd simple-lodde-cli-app`

### Prerequisites

This project is configured to be able to containerized using docker. 

Run these following commands

1. Build the image (you can fill image name with what ever you want)
```sh
docker build -t <image-name> .
```

2. Instantiate the container
```sh
docker run -t -d <image-name>
```

3. Open interactive container's terminal
```sh
docker exec -it <container-id> bash
```

4. Continue reading the `Usage` below on how to use the commands.

### Installation

Although, you can install it on your local project environment system without dockerize it. 

Run these following commands to install local project environment system.

1. Install NPM packages
   ```sh
   npm install && npm link
   ```

2. Continue reading the `Usage` section below on how to use the commands.



<!-- USAGE EXAMPLES -->
## Usage
Use `lodde-cli` to run commands

`-r` or `--request` Is command option to define what wrapper functions want to be called

example command:
```sh
lodde-cli --request getAll
```

#### Wrapper functions available

<table>
<tr>
  <th>No</th>
  <th>Function</th>
  <th>Description</th>
  <th>Argument Prompt Type / Input's Example</th>
</tr>
<tr>
  <td>1</td>
  <td>getAll</td>
  <td>To get all records</td>
  <td>-</td>
</tr>
<tr>
  <td>2</td>
  <td>getAllBy</td>
  <td>To get all records by column and value</td>
  <td>
    strings
  </td>
</tr>
<tr>
  <td>2</td>
  <td>getAllByRange</td>
  <td>To get all records by column in range</td>
  <td>
    strings
  </td>
</tr>
<tr>
  <td>3</td>
  <td>getMaxPrice</td>
  <td>To get record with highest price</td>
  <td>
    -
  </td>
</tr>
<tr>
  <td>4</td>
  <td>getMostRecord</td>
  <td>To get record with highest size by column value</td>
  <td>
    strings
  </td>
</tr>
<tr>
  <td>5</td>
  <td>getById</td>
  <td>To get record with given id</td>
  <td>
    string
  </td>
</tr>
<tr>
  <td>6</td>
  <td>addRecord</td>
  <td>To add new record</td>
  <td>
    strings
  </td>
</tr>
<tr>
  <td>7</td>
  <td>updateRecord</td>
  <td>To update record by condition</td>
  <td>
    condition example ↓ </br>{"uuid": "<id>", ...} </br></br>
    set example ↓ </br>{"komoditas": "LELE", "size": 77, ...}
  </td>
</tr>
<tr>
  <td>8</td>
  <td>deleteRecord</td>
  <td>To delete record by condition</td>
  <td>
    condition example ↓ </br>{"uuid": "<id>", ...} </br>
  </td>
</tr>
</table>

_For more examples, please refer to the [Documentation](https://example.com)_

Video reference on how to use the cli-app:
<div align="center">
  <a href="https://www.youtube.com/watch?v=XOSBZO7jktM"><img src="https://img.youtube.com/vi/AHEARo_5pko/0.jpg" alt="IMAGE ALT TEXT"></a>
</div>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

Reinhard Jonathan Silalahi - [@reinhard_js](https://twitter.com/reinhard_js) - reinhardjsilalahi@gmail.com

Project Link: [https://github.com/reinhardjs/simple-lodde-cli-app](https://github.com/reinhardjs/simple-lodde-cli-app)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/reinhardjs/simple-lodde-cli-app.svg?style=for-the-badge
[contributors-url]: https://github.com/reinhardjs/simple-lodde-cli-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/reinhardjs/simple-lodde-cli-app.svg?style=for-the-badge
[forks-url]: https://github.com/reinhardjs/simple-lodde-cli-app/network/members
[stars-shield]: https://img.shields.io/github/stars/reinhardjs/simple-lodde-cli-app.svg?style=for-the-badge
[stars-url]: https://github.com/reinhardjs/simple-lodde-cli-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/reinhardjs/simple-lodde-cli-app.svg?style=for-the-badge
[issues-url]: https://github.com/reinhardjs/simple-lodde-cli-app/issues
[license-shield]: https://img.shields.io/github/license/reinhardjs/simple-lodde-cli-app.svg?style=for-the-badge
[license-url]: https://github.com/reinhardjs/simple-lodde-cli-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/reinhardjsilalahi
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/npm/v/npm.svg?logo=nodedotjs
[Node.js-url]: https://nodejs.org/
