angular.module("Map").constant("mapConstants", {
    sources : {
    "simulator": {
       "icon": {
             url : "https://cdn.rawgit.com/scriptrdotio/resources/ac990f8f/multitech/images/map-pin.png"
       }
    }
  },
  sourcesLabels: {
    "simulator": "Multitech Conduit"
  },
  infoWindows: {
    "icons": {
      "device": '<img  src="//raw.githubusercontent.com/scriptrdotio/resources/485068d6/multitech/images/multitech-id.png">',
      "temperature": '<img alt="Embedded Image"  width="17" height="30"   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAABDCAYAAAAMEVyNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAopJREFUeNrsWo1xgyAUjr0O4Ah2gtoJajdwBEdIN8gGjmA7gekEJBOQTmA2MBtQ6NE7S94zgKAk4d1xuSg/38PH4+M9VqsoUe5LEpedMcYy/pMNHh2TJDkGqz0HnPKy4aVjsIjntVQsKOBrXnqmL5tQgDfMTpprBb6sAnzgEgFExDulbj6i6HoJ8NDCrDQUVteG+J/OCbyyncEpbV2Bb1U3aNieKO3pkiaznrpeBu9qqZxaKlfgVSlMd2Cgjwz5Khf3hodZuQhMFax33ofVFctjQFg+edkDz3dB2LyrPm7CbKLNOzLJnP9AdMHNgcanzQfv56PN3wr46Oej2UTwy62n6Ocj+Hs7jLxjxCx48Jw5HqLN36XNS55SKAeJjxA2keYSqZIZkn+RYw1iRr2ajQzrVcCrk8WYahsRBq99zXiGbNslUFdn5nMkFVT4AE904/E64AcKsCkRZ9tZb5C6FRBF7jFiBSgKfs0p4GtggBSo117IQVGkXectVyUHHe0cURDMWWnMfu/zzFpq2O6YVBrtcycRLCwRYDHrf9K6PJCP+fkUIE8qwzOdpdyENYbGbbKQwJsOvAOeeYnbHBDiNZS94XhfSn/+ksg6qUvAnWJylvGGEss+mWRnwFVU4LkG9SAuwZc6KXdJI8jIhQoIeGF6h+HM++mYjuIlBKV9gbIVEmQxcLNb6GwqzYcC/T7x+iffs09tF5u81kVnuwWFEK/OdCuX5kVdnqamzBaT5CrVaL9BFnZve3kuMVBAzDJBAkO/9s3Lt7IRiTbPvJRIO2HfbzYxG9vDCWVupHPCIC1MqJ4IvJ31ihbip4khaOLyoJ24MCVp06/Sb+cKPzpKDrQN+mpulHuRHwEGABd09rO+akyqAAAAAElFTkSuQmCC" />',
       "pressure": '<img alt="Embedded Image"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcRJREFUeNrMV+1RwzAMjbn+xxvgEcIEuBPQEcIEpBNQJggblE5QmCAwAWWCZIOyQZC450Pk3Cap7aO608V1Pp6fLT2pKhPWdZ2li83+2rNSqs0i20V2Lkas6+7XbCocH+OdGN+nAlYexsyyFlMtfIy9kz9RTHydut3r7nT7INchZ70i358IXk7eas8CcrqMYcDxsMD4jbZ7fuzh2eDKlNqN3KFMAA/aLGKgGvJHsRCTQniG8p+t4LPGuE7JeNmLhVvy8j8YWw5MzFcpGR8KzHkqpoYZeXKemRapQMuRSpbHBK367JxU4myl8u2jgNNHFgKUATTmcixIYyEGjH+YxwBu8LE1fheuOADcOiCAO+ZFCGgu2GoALo6kWIFd8QrJ1KrFthXbrsW9rTtPd08uNkbP9QmAGy78GD9AvSrRRGx9hSYE+BIf3vA5MgDmrWifWlk4QoFdxbFocZgds92QX7NS0fwSz3DwaREDbahSST0uwNj3rEupWmZBCLjryZqeaNT9otBTNxMKrEVuNmBuENUrp2I9dasm9VwDvVgtajAH1CvGV2iDtPgbdBdTr/VAK9wcUisVaQEGaSTPcEcsXw698y3AAIer42hnjkZbAAAAAElFTkSuQmCC" />',
       "time": '<img  alt="Embedded Image"    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWJJREFUeNrMV4ttwjAQxRUDZIN6hDBBvQF0A0ZgBDZAnSDqBGWD0glgg4YJwgbmWTXCuvhzbkzISU9R8F3enc9+NrPZk0zkOGutV3i8AbVFZYdOQAv8AHshRDs4M5BVwBboNN++ATWEdJVJSO3LJJ5LutVl7AjUrB7DcYfHJpDTxfQROAMHQFosbd9DMYto70G6DmT+a8YSsySBJlJ5FQvshvYqsjZ2oQBftk2EQDl+kozVAXLpq5Y/PX1ixWxbQ502HieVmFKV8rV72rXO/P7i+CxJzAmr8FBAHT/IuxEk5RLTjD+LaLIQe7udXPsj7jX8rr+ljH7r9Vbx2MRynimjnXMi5Vgv5laxT8pqzgeYRme0ndsF0KIaHzFd1e+BhC6JHUBjzrH9dizRXCufYX34j4Awib0CMkgyGaRrlvbnHhIJUt4h8dRjccyLwHSuPmNd9qZ3vX30hX66f2EeZVcBBgA+szra3JBkIwAAAABJRU5ErkJggg==" />',
        "light": '<img   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaZJREFUeNrEV4uNwyAMhaoDMAIblA3KCBmBEdINskFvg4zQ26C5CdKbIN2g2SA1J1ohKwmGQM+SFQmM/fCXcJZA0zRJ+Ghg6S3fgTvO+Z2VIjAsgA3wMK2T3a+tfG4AmmAc0wO4oujnBAAGPi1aHq3rgX+9tYMLEfbAF4TotMUDZuZ2hnAGe61OBSCd0Rf11Di7/LkgIDIFRBsC4Iw1jvXMXu/paFNA+F7QCzIK3dYaVSih3xQLwFc+EKvn7OWN8Pb60GV2C3oFakLrJcZ55yrg5M4qb/sWOr/P3NO+gY8IuEitjKhwBHQNoXBQE9Ns6LTvHpOioEFNSkSeF8gLSSUqNjarHl1Csgzu/ANCPHdF5yq2MbHw/GgC8jWSN1nqzmtEq3NgJoRt1gZASTKUzEOJh00VKjcE1LAShIyomdGf1BP2MSWLluyoHxfa82jlYZ6Mub1QR74xz1TduwgcsUkmS4C4RYL4KQFCRYI4lADx/zQzFUM/PuSc4JFAyI9VKE9eKhwdUa74T3G7EpaH25efyA+FpuULgP50okp366v7qlRdTwEGAMsOlvf4csQyAAAAAElFTkSuQmCC">'
    }
  }
})