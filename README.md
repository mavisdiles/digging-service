<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">인기 없는 가수 노래 추천 웹사이트</h3>

  <p align="center">
    Digging Website
  </p>
  
  <a href="http://khuhub.khu.ac.kr/2017110270/digging-service.git">
    <img src="/images/1.png" alt="Logo" width="300" height="100">
  </a>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

<img src="/images/2.PNG" alt="Logo" width="600" height="400">
차트 위 가수가 아닌 인기 없는 가수의 음악을 추천해주는 웹사이트입니다.

* spotify API를 이용해 정확한 음악과 아티스트 데이터를 불러옵니다.
* 원하는 장르를 선택하면 이를 기반으로 음악과 아티스트를 추천합니다.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->

### Installation

1. Get a Developer API Key at [https://developer.spotify.com](https://developer.spotify.com)
2. Clone the repo
   ```
   git clone http://khuhub.khu.ac.kr/2017110270/digging-service.git
   ```
3. Install NPM packages
   ```
   npm install
   ```
4. Enter your API in api.js

``` 
  var spotifyApi = new SpotifyWebApi({
    clientId: "your id",
    clientSecret: "your secret",
    redirectUri: "redirectUri"
  });
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Usage -->
### Usage

* 락,일렉,힙합,어쿠스틱,재즈,팝 총 6가지의 장르 중 하나를 선택합니다.
* 장르 선택을 기반으로 아티스트를 추천받습니다.

<img src="/images/4.PNG" alt="Logo" width="600" height="400">

* 추천받은 아티스트의 노래를 재생해볼 수 있습니다.

<img src="/images/5.PNG" alt="Logo" width="600" height="400">

<!-- LICENSE -->
## License

MIT License

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

김유민 - heyday2036@khu.ac.kr


<p align="right">(<a href="#top">back to top</a>)</p>
