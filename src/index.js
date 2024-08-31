"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scene = void 0;
var _three = require("three");
var _OrbitControls = require("three/addons/controls/OrbitControls.js");
function cov_2qna49xbpz() {
  var path = "/Users/PC/Documents/git/3d_test_takehome-main/src/index.js";
  var hash = "52f0e8bc098fd811d74c708e33e8deed37b89740";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/PC/Documents/git/3d_test_takehome-main/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 13
        },
        end: {
          line: 4,
          column: 45
        }
      },
      "1": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 5,
          column: 45
        }
      },
      "2": {
        start: {
          line: 6,
          column: 13
        },
        end: {
          line: 6,
          column: 45
        }
      },
      "3": {
        start: {
          line: 7,
          column: 14
        },
        end: {
          line: 7,
          column: 46
        }
      },
      "4": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 55
        }
      },
      "5": {
        start: {
          line: 9,
          column: 16
        },
        end: {
          line: 9,
          column: 51
        }
      },
      "6": {
        start: {
          line: 10,
          column: 19
        },
        end: {
          line: 10,
          column: 57
        }
      },
      "7": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 55
        }
      },
      "8": {
        start: {
          line: 13,
          column: 16
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "9": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 19
        }
      },
      "10": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 26,
          column: 3
        }
      },
      "11": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 42
        }
      },
      "12": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "13": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 42
        }
      },
      "14": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 34,
          column: 3
        }
      },
      "15": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 33,
          column: 42
        }
      },
      "16": {
        start: {
          line: 36,
          column: 0
        },
        end: {
          line: 38,
          column: 3
        }
      },
      "17": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 37
        }
      },
      "18": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 48,
          column: 3
        }
      },
      "19": {
        start: {
          line: 41,
          column: 20
        },
        end: {
          line: 41,
          column: 102
        }
      },
      "20": {
        start: {
          line: 42,
          column: 2
        },
        end: {
          line: 42,
          column: 85
        }
      },
      "21": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 46,
          column: 5
        }
      },
      "22": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 47,
          column: 23
        }
      },
      "23": {
        start: {
          line: 50,
          column: 0
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "24": {
        start: {
          line: 51,
          column: 17
        },
        end: {
          line: 51,
          column: 100
        }
      },
      "25": {
        start: {
          line: 52,
          column: 2
        },
        end: {
          line: 52,
          column: 82
        }
      },
      "26": {
        start: {
          line: 53,
          column: 2
        },
        end: {
          line: 56,
          column: 5
        }
      },
      "27": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 57,
          column: 20
        }
      },
      "28": {
        start: {
          line: 60,
          column: 0
        },
        end: {
          line: 65,
          column: 3
        }
      },
      "29": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 64,
          column: 3
        }
      },
      "30": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 62,
          column: 24
        }
      },
      "31": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 63,
          column: 25
        }
      },
      "32": {
        start: {
          line: 67,
          column: 0
        },
        end: {
          line: 72,
          column: 3
        }
      },
      "33": {
        start: {
          line: 68,
          column: 2
        },
        end: {
          line: 71,
          column: 3
        }
      },
      "34": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 69,
          column: 24
        }
      },
      "35": {
        start: {
          line: 70,
          column: 4
        },
        end: {
          line: 70,
          column: 25
        }
      },
      "36": {
        start: {
          line: 74,
          column: 22
        },
        end: {
          line: 74,
          column: 53
        }
      },
      "37": {
        start: {
          line: 75,
          column: 17
        },
        end: {
          line: 75,
          column: 55
        }
      },
      "38": {
        start: {
          line: 76,
          column: 0
        },
        end: {
          line: 76,
          column: 50
        }
      },
      "39": {
        start: {
          line: 77,
          column: 0
        },
        end: {
          line: 77,
          column: 47
        }
      },
      "40": {
        start: {
          line: 79,
          column: 21
        },
        end: {
          line: 79,
          column: 32
        }
      },
      "41": {
        start: {
          line: 80,
          column: 0
        },
        end: {
          line: 80,
          column: 40
        }
      },
      "42": {
        start: {
          line: 82,
          column: 0
        },
        end: {
          line: 82,
          column: 86
        }
      },
      "43": {
        start: {
          line: 83,
          column: 0
        },
        end: {
          line: 83,
          column: 86
        }
      },
      "44": {
        start: {
          line: 84,
          column: 0
        },
        end: {
          line: 84,
          column: 86
        }
      },
      "45": {
        start: {
          line: 86,
          column: 15
        },
        end: {
          line: 86,
          column: 104
        }
      },
      "46": {
        start: {
          line: 87,
          column: 0
        },
        end: {
          line: 87,
          column: 31
        }
      },
      "47": {
        start: {
          line: 90,
          column: 2
        },
        end: {
          line: 90,
          column: 65
        }
      },
      "48": {
        start: {
          line: 91,
          column: 2
        },
        end: {
          line: 91,
          column: 34
        }
      },
      "49": {
        start: {
          line: 92,
          column: 2
        },
        end: {
          line: 92,
          column: 68
        }
      },
      "50": {
        start: {
          line: 95,
          column: 0
        },
        end: {
          line: 95,
          column: 23
        }
      },
      "51": {
        start: {
          line: 97,
          column: 0
        },
        end: {
          line: 99,
          column: 2
        }
      },
      "52": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 98,
          column: 43
        }
      },
      "53": {
        start: {
          line: 101,
          column: 17
        },
        end: {
          line: 101,
          column: 65
        }
      },
      "54": {
        start: {
          line: 102,
          column: 0
        },
        end: {
          line: 102,
          column: 31
        }
      },
      "55": {
        start: {
          line: 103,
          column: 0
        },
        end: {
          line: 103,
          column: 18
        }
      },
      "56": {
        start: {
          line: 104,
          column: 0
        },
        end: {
          line: 104,
          column: 26
        }
      },
      "57": {
        start: {
          line: 105,
          column: 0
        },
        end: {
          line: 105,
          column: 30
        }
      },
      "58": {
        start: {
          line: 108,
          column: 2
        },
        end: {
          line: 108,
          column: 20
        }
      },
      "59": {
        start: {
          line: 109,
          column: 2
        },
        end: {
          line: 109,
          column: 33
        }
      },
      "60": {
        start: {
          line: 110,
          column: 2
        },
        end: {
          line: 110,
          column: 32
        }
      },
      "61": {
        start: {
          line: 112,
          column: 0
        },
        end: {
          line: 112,
          column: 9
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 24,
            column: 32
          },
          end: {
            line: 24,
            column: 33
          }
        },
        loc: {
          start: {
            line: 24,
            column: 43
          },
          end: {
            line: 26,
            column: 1
          }
        },
        line: 24
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 28,
            column: 32
          },
          end: {
            line: 28,
            column: 33
          }
        },
        loc: {
          start: {
            line: 28,
            column: 43
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 28
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 32,
            column: 32
          },
          end: {
            line: 32,
            column: 33
          }
        },
        loc: {
          start: {
            line: 32,
            column: 43
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 32
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 36,
            column: 33
          },
          end: {
            line: 36,
            column: 34
          }
        },
        loc: {
          start: {
            line: 36,
            column: 44
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 36
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 40,
            column: 36
          },
          end: {
            line: 40,
            column: 37
          }
        },
        loc: {
          start: {
            line: 40,
            column: 47
          },
          end: {
            line: 48,
            column: 1
          }
        },
        line: 40
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 50,
            column: 34
          },
          end: {
            line: 50,
            column: 35
          }
        },
        loc: {
          start: {
            line: 50,
            column: 45
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 50
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 60,
            column: 37
          },
          end: {
            line: 60,
            column: 38
          }
        },
        loc: {
          start: {
            line: 60,
            column: 48
          },
          end: {
            line: 65,
            column: 1
          }
        },
        line: 60
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 67,
            column: 36
          },
          end: {
            line: 67,
            column: 37
          }
        },
        loc: {
          start: {
            line: 67,
            column: 47
          },
          end: {
            line: 72,
            column: 1
          }
        },
        line: 67
      },
      "8": {
        name: "setSize",
        decl: {
          start: {
            line: 89,
            column: 9
          },
          end: {
            line: 89,
            column: 16
          }
        },
        loc: {
          start: {
            line: 89,
            column: 28
          },
          end: {
            line: 93,
            column: 1
          }
        },
        line: 89
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 97,
            column: 18
          },
          end: {
            line: 97,
            column: 19
          }
        },
        loc: {
          start: {
            line: 97,
            column: 30
          },
          end: {
            line: 99,
            column: 1
          }
        },
        line: 97
      },
      "10": {
        name: "update",
        decl: {
          start: {
            line: 107,
            column: 9
          },
          end: {
            line: 107,
            column: 15
          }
        },
        loc: {
          start: {
            line: 107,
            column: 18
          },
          end: {
            line: 111,
            column: 1
          }
        },
        line: 107
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 64,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 61
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "52f0e8bc098fd811d74c708e33e8deed37b89740"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2qna49xbpz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2qna49xbpz();
var posX = (cov_2qna49xbpz().s[0]++, document.getElementById('pos_x'));
var posY = (cov_2qna49xbpz().s[1]++, document.getElementById('pos_y'));
var posZ = (cov_2qna49xbpz().s[2]++, document.getElementById('pos_z'));
var color = (cov_2qna49xbpz().s[3]++, document.getElementById('color'));
var addSphere = (cov_2qna49xbpz().s[4]++, document.getElementById('add_sphere'));
var addCube = (cov_2qna49xbpz().s[5]++, document.getElementById('add_cube'));
var removeLast = (cov_2qna49xbpz().s[6]++, document.getElementById('remove_last'));
var removeAll = (cov_2qna49xbpz().s[7]++, document.getElementById('remove_all'));
var options = (cov_2qna49xbpz().s[8]++, {
  color: color.value,
  position: {
    x: posX.value,
    y: posX.value,
    z: posX.value
  }
});
cov_2qna49xbpz().s[9]++;
window.shapes = [];
cov_2qna49xbpz().s[10]++;
posX.addEventListener('change', function (event) {
  cov_2qna49xbpz().f[0]++;
  cov_2qna49xbpz().s[11]++;
  options.position.x = event.target.value;
});
cov_2qna49xbpz().s[12]++;
posY.addEventListener('change', function (event) {
  cov_2qna49xbpz().f[1]++;
  cov_2qna49xbpz().s[13]++;
  options.position.y = event.target.value;
});
cov_2qna49xbpz().s[14]++;
posZ.addEventListener('change', function (event) {
  cov_2qna49xbpz().f[2]++;
  cov_2qna49xbpz().s[15]++;
  options.position.z = event.target.value;
});
cov_2qna49xbpz().s[16]++;
color.addEventListener('change', function (event) {
  cov_2qna49xbpz().f[3]++;
  cov_2qna49xbpz().s[17]++;
  options.color = event.target.value;
});
cov_2qna49xbpz().s[18]++;
addSphere.addEventListener('click', function (event) {
  cov_2qna49xbpz().f[4]++;
  var newSphere = (cov_2qna49xbpz().s[19]++, new _three.Mesh(new _three.SphereGeometry(0.5), new _three.MeshBasicMaterial({
    color: options.color
  })));
  cov_2qna49xbpz().s[20]++;
  newSphere.position.set(options.position.x, options.position.y, options.position.z);
  cov_2qna49xbpz().s[21]++;
  window.shapes.push({
    type: 'sphere',
    options: JSON.parse(JSON.stringify(options))
  });
  cov_2qna49xbpz().s[22]++;
  scene.add(newSphere);
});
cov_2qna49xbpz().s[23]++;
addCube.addEventListener('click', function (event) {
  cov_2qna49xbpz().f[5]++;
  var newBox = (cov_2qna49xbpz().s[24]++, new _three.Mesh(new _three.BoxGeometry(1, 1, 1), new _three.MeshBasicMaterial({
    color: options.color
  })));
  cov_2qna49xbpz().s[25]++;
  newBox.position.set(options.position.x, options.position.y, options.position.z);
  cov_2qna49xbpz().s[26]++;
  window.shapes.push({
    type: 'cube',
    options: JSON.parse(JSON.stringify(options))
  });
  cov_2qna49xbpz().s[27]++;
  scene.add(newBox);
});
cov_2qna49xbpz().s[28]++;
removeLast.addEventListener('click', function (event) {
  cov_2qna49xbpz().f[6]++;
  cov_2qna49xbpz().s[29]++;
  if (scene.children[scene.children.length - 1] instanceof _three.Mesh) {
    cov_2qna49xbpz().b[0][0]++;
    cov_2qna49xbpz().s[30]++;
    window.shapes.pop();
    cov_2qna49xbpz().s[31]++;
    scene.children.pop();
  } else {
    cov_2qna49xbpz().b[0][1]++;
  }
});
cov_2qna49xbpz().s[32]++;
removeAll.addEventListener('click', function (event) {
  cov_2qna49xbpz().f[7]++;
  cov_2qna49xbpz().s[33]++;
  while (scene.children[scene.children.length - 1] instanceof _three.Mesh) {
    cov_2qna49xbpz().s[34]++;
    window.shapes.pop();
    cov_2qna49xbpz().s[35]++;
    scene.children.pop();
  }
});
var viewContainer = (cov_2qna49xbpz().s[36]++, document.getElementById('view'));
var renderer = (cov_2qna49xbpz().s[37]++, new _three.WebGLRenderer({
  antialias: true
}));
cov_2qna49xbpz().s[38]++;
renderer.setPixelRatio(window.devicePixelRatio);
cov_2qna49xbpz().s[39]++;
viewContainer.appendChild(renderer.domElement);
var scene = exports.scene = (cov_2qna49xbpz().s[40]++, new _three.Scene());
cov_2qna49xbpz().s[41]++;
scene.background = new _three.Color('#FFFFFF');
cov_2qna49xbpz().s[42]++;
scene.add(new _three.ArrowHelper(new _three.Vector3(1, 0, 0), new _three.Vector3(0, 0, 0), 1, '#FF0000'));
cov_2qna49xbpz().s[43]++;
scene.add(new _three.ArrowHelper(new _three.Vector3(0, 1, 0), new _three.Vector3(0, 0, 0), 1, '#00FF00'));
cov_2qna49xbpz().s[44]++;
scene.add(new _three.ArrowHelper(new _three.Vector3(0, 0, 1), new _three.Vector3(0, 0, 0), 1, '#0000FF'));
var camera = (cov_2qna49xbpz().s[45]++, new _three.PerspectiveCamera(40, viewContainer.innerWidth / viewContainer.innerHeight, 1, 100));
cov_2qna49xbpz().s[46]++;
camera.position.set(5, 2, 8);
function setSize(container) {
  cov_2qna49xbpz().f[8]++;
  cov_2qna49xbpz().s[47]++;
  camera.aspect = container.clientWidth / container.clientHeight;
  cov_2qna49xbpz().s[48]++;
  camera.updateProjectionMatrix();
  cov_2qna49xbpz().s[49]++;
  renderer.setSize(container.clientWidth, container.clientHeight);
}
cov_2qna49xbpz().s[50]++;
setSize(viewContainer);
cov_2qna49xbpz().s[51]++;
window.onresize = function () {
  cov_2qna49xbpz().f[9]++;
  cov_2qna49xbpz().s[52]++;
  setSize(document.getElementById('view'));
};
var controls = (cov_2qna49xbpz().s[53]++, new _OrbitControls.OrbitControls(camera, renderer.domElement));
cov_2qna49xbpz().s[54]++;
controls.target.set(0, 0, 0);
cov_2qna49xbpz().s[55]++;
controls.update();
cov_2qna49xbpz().s[56]++;
controls.enablePan = true;
cov_2qna49xbpz().s[57]++;
controls.enableDamping = true;
function update() {
  cov_2qna49xbpz().f[10]++;
  cov_2qna49xbpz().s[58]++;
  controls.update();
  cov_2qna49xbpz().s[59]++;
  renderer.render(scene, camera);
  cov_2qna49xbpz().s[60]++;
  requestAnimationFrame(update);
}
cov_2qna49xbpz().s[61]++;
update();