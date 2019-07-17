(function() {
    if (localStorage["has_log_njcdds"] === "true"){
        return
    }
    function get_flash() {
        var hasFlash = 0;
        var flashVersion = 0;
        if (document.all) {
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if (swf) {
                hasFlash = 1;
                VSwf = swf.GetVariable("$version");
                flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                var swf = navigator.plugins["Shockwave Flash"];
                if (swf) {
                    hasFlash = 1;
                    var words = swf.description.split(" ");
                    for (var i = 0; i < words.length; ++i) {
                        if (isNaN(parseInt(words[i]))) {
                            continue;
                        }
                        flashVersion = parseInt(words[i]);
                    }
                }
            }
        }
        return {
            has: !! hasFlash,
            version: flashVersion
        };
    }

    function get_plugins() {
        var plugins = navigator.plugins;
        var temp = [];
        for (var i = 0; i < plugins.length; i++) {
            temp.push([plugins[i].name, plugins[i].filename, plugins[i].description].join(';'))
        }
        return temp.join('!!-!!')
    }

    function get_canvas_fp() {
        var canvasData;
        try {
            var canvas = document.createElement('canvas');
            canvas.height = 60;
            canvas.width = 400;
            var canvasContext = canvas.getContext('2d');
            canvas.style.display = 'inline';
            canvasContext.textBaseline = 'alphabetic';
            canvasContext.fillStyle = '#f60';
            canvasContext.fillRect(125, 1, 62, 20);
            canvasContext.fillStyle = '#069';
            canvasContext.font = '11pt no-real-font-123';
            canvasContext.fillText("Cwm fjordbank glyphs vext quiz, \uD83D\uDE03", 2, 15);
            canvasContext.fillStyle = 'rgba(102, 204, 0, 0.7)';
            canvasContext.font = '18pt Arial';
            canvasContext.fillText("Cwm fjordbank glyphs vext quiz Tiantest, \uD83D\uDE03", 4, 45);
            canvasData = canvas.toDataURL().replace("data:image/png;base64,", "");
            canvasData = atob(canvasData);
            canvasData = btoa(canvasData.slice(-16, -12));
        } catch (e) {
            canvasData = 0;
        }

        return canvasData;
    }

    function get_fonts() {
        var fonts = ['.Aqua Kana', '.Helvetica LT MM', '.Times LT MM', 'Aakar', 'Abyssinica SIL', 'Aharoni Bold', 'Al Bayan', 'Aldhabi', 'Al Nile', 'Al Tarikh', 'American Typewriter', 'Andale Mono', 'Andale Mono Version', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Ani', 'AnjaliOldLipi', 'Aparajita', 'Apple Braille', 'Apple Braille Outline 6 Dot', 'Apple Braille Outline 8 Dot', 'Apple Braille Pinpoint 6 Dot', 'Apple Braille Pinpoint 8 Dot', 'Apple Chancery', 'Apple Color Emoji', 'AppleGothic', 'AppleGothic Regular', 'Apple LiGothic Medium', 'Apple LiSung Light', 'AppleMyungjo', 'AppleMyungjo Regular', 'Apple SD Gothic Neo', 'Apple Symbols', 'AquaKana', 'Arabic Typesetting', 'Arial', 'Arial Black', 'ArialHB', 'Arial Hebrew', 'Arial Narrow', 'Arial Rounded Bold', 'Avenir', 'Avenir Book', 'Avenir Next', 'Avenir Next Condensed', 'Avenir Roman', 'Ayuthaya', 'Baghdad', 'Bahnschrift', 'Bangla MN', 'Bangla Sangam MN', 'Baskerville', 'Batang', 'Beirut', 'BiauKai', 'Big Caslon', 'Big Caslon Medium', 'Bodoni Ornaments', 'Bodoni 72', 'Bradley Hand', 'Browallia New', 'BrowalliaUPC', 'Brush Script', 'Brush Script MT', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Chalkboard', 'ChalkboardBold', 'Chalkduster', 'Chandas', 'Charter', 'Chilanka', 'Cochin', 'Comic Sans MS', 'Consolas', 'Constantia', 'Copperplate', 'Corbel', 'Cordia New', 'CordiaUPC', 'Corsiva', 'Corsiva Hebrew', 'Courier', 'Courier New', 'Damascus', 'DaunPenh', 'David', 'DecoType Naskh', 'Deja Vu', 'Devanagari MT', 'Devanagari Sangam MN', 'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN Alternate', 'DIN Condensed', 'Diwan Kufi', 'Diwan Kufi Regular', 'Diwan Thuluth', 'Diwan Thuluth Regular', 'DokChampa', 'Dotum', 'Droid Sans Fallback', 'Dyuthi', 'Ebrima', 'Estrangelo Edessa', 'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'FangSong', 'Farah', 'Farisi', 'Franklin Gothic Medium', 'FrankRuehl', 'FreeMono', 'FreeSans', 'FreeSerif', 'FreesiaUPC', 'Futura', 'Gabriola', 'Gadugi', 'Gargi', 'Garuda', 'Gautami', 'GB18030 Bitmap', 'Geeza Pro', 'Geneva', 'GenevaCY', 'Georgia', 'Gill', 'Gill Sans', 'Gisha', 'Gubbi', 'Gujarati MT', 'Gujarati Sangam MN', 'Gulim', 'Gungseouche', 'Gungsuh', 'Gurmukhi', 'Gurmukhi MN', 'Gurmukhi MT', 'Gurmukhi Sangam MN', 'HeadlineA', 'Hei', 'Heiti SC', 'Heiti SC Light', 'Heiti SC Medium', 'Heiti TC', 'Heiti TC Light', 'Heiti TC Medium', 'Helvetica', 'HelveticaCY', 'Helvetica Neue', 'Herculanum', 'Hiragino Kaku Gothic ProN W3', 'Hiragino Kaku Gothic ProN W6', 'Hiragino Kaku Gothic Pro W3', 'Hiragino Kaku Gothic Pro W6', 'Hiragino Kaku Gothic StdN W8', 'Hiragino Kaku Gothic StdN W8', 'Hiragino Kaku Gothic Std W8', 'Hiragino Maru Gothic ProN W4', 'Hiragino Maru Gothic ProN W4', 'Hiragino Maru Gothic Pro W4', 'Hiragino Mincho ProN W3', 'Hiragino Mincho ProN W6', 'Hiragino Mincho Pro W3', 'Hiragino Mincho Pro W6', 'Hiragino Sans GB W3', 'Hiragino Sans GB W6', 'Hiragino Sans W0', 'Hiragino Sans W1', 'Hiragino Sans W2', 'Hiragino Sans W3', 'Hiragino Sans W4', 'Hiragino Sans W5', 'Hiragino Sans W6', 'Hiragino Sans W7', 'Hiragino Sans W8', 'Hiragino Sans W9', 'Hoefler Text', 'Hoefler Text Ornaments', 'Impact', 'InaiMathi', 'Ink Free', 'IrisUPC', 'Iskoola Pota', 'ITF Devanagari', 'ITF Devanagari Marathi', 'ITF Devanagari Medium', 'Jamrul', 'JasmineUPC', 'Javanese Text', 'KacstArt', 'KacstBook', 'KacstDecorative', 'KacstDigital', 'KacstFarsi', 'KacstLetter', 'KacstNaskh', 'KacstOffice', 'KacstOne', 'KacstPen', 'KacstPoster', 'KacstQurn', 'KacstScreen', 'KacstTitle', 'KacstTitleL', 'Kai', 'Kailasa', 'KaiTi', 'Kalapi', 'Kalimati', 'Kalinga', 'Kannada MN', 'Kannada Sangam MN', 'Kartika', 'Karumbi', 'Kefa', 'Keraleeyam', 'Keyboard', 'Khmer MN', 'Khmer OS', 'Khmer Sangam MN', 'Khmer UI', 'Kinnari', 'KodchiangUPC', 'Kohinoor Bangla', 'Kohinoor Devanagari', 'Kohinoor Telugu', 'Kokila', 'Kokonor', 'Kokonor Regular', 'Krungthep', 'KufiStandardGK', 'KufiStandardGK Regular', 'Laksaman', 'Lao MN', 'Lao Sangam MN', 'Lao UI', 'LastResort', 'Latha', 'Leelawadee', 'Levenim MT', 'Liberation Mono', 'Liberation Sans', 'Liberation Serif', 'LiHei Pro', 'Likhan', 'LilyUPC', 'LiSong Pro', 'lklug', 'Lohit Assamese', 'Lohit Bengali', 'Lohit Devanagari', 'Lohit Gujarati', 'Lohit Gurmukhi', 'Lohit Kannada', 'Lohit Malayalam', 'Lohit Odia', 'Lohit Punjabi', 'Lohit Tamil', 'Lohit Tamil Classical', 'Lohit Telugu', 'Loma', 'Lucida Console', 'Lucida Grande', 'Lucida Sans Unicode', 'Luminari', 'Malayalam MN', 'Malayalam Sangam MN', 'Malgun Gothic', 'Mangal', 'Marker Felt', 'Marlett', 'Meera', 'Meiryo', 'Meiryo UI', 'Menlo', 'Microsoft', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU-ExtB', 'Miriam', 'Mishafi', 'Mishafi Gold', 'Monaco', 'Mongolian Baiti', 'MoolBoran', 'MS Gothic', 'Mshtakan', 'MS Mincho', 'Mukti Narrow', 'Muna', 'MV Boli', 'Myanmar MN', 'Myanmar Sangam MN', 'Myanmar Text', 'Nadeem', 'Nadeem Regular', 'Nakula', 'Nanum Barun Gothic', 'Nanum Gothic', 'Nanum Myeongjo', 'Narkisim', 'Navilu', 'New Peninim MT', 'Nirmala.ttf', 'Nirmala UI', 'NISC18030', 'Norasi', 'Noteworthy', 'Noto Color Emoji', 'Noto Mono', 'Noto Nastaliq Urdu', 'Noto Sans CJK', 'Nyala', 'Optima', 'Oriya MN', 'Oriya Sangam MN', 'Osaka', 'OsakaMono', 'Padauk', 'Padauk Book', 'Padmaa', 'Pagul', 'Palatino', 'Palatino Linotype', 'Papyrus', 'PCmyoungjo', 'Phetsarath OT', 'Phosphate', 'Phosphate Inline', 'Phosphate Solid', 'Pilgiche', 'PingFang HK', 'PingFang SC', 'PingFang TC', 'Plantagenet Cherokee', 'Pothana2000', 'PT Mono', 'PT Sans', 'PT Serif', 'Purisa', 'Raanana', 'Raavi', 'Rachana', 'RaghuMalayalam', 'Rekha', 'Rockwell', 'Rod', 'Saab', 'Sahadeva', 'Sakkal Majalla', 'Samanata', 'Samyak Devanagari', 'Samyak Gujarati', 'Samyak Malayalam', 'Samyak Tamil', 'Sana', 'Sana Regular', 'Sarai', 'Sathu', 'Savoye LET Plain:1.0', 'Sawasdee', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Pseudo', 'Segoe Script', 'Segoe UI', 'Segoe UI Emoji', 'Segoe UI Historic', 'Segoe UI Symbol', 'Shonar Bangla', 'Shree Devanagari 714', 'Shruti', 'SignPainter-HouseScript', 'Silom', 'SimHei', 'Simplified Arabic', 'SimSun', 'SimSun-ExtB', 'Sinhala MN', 'Sinhala Sangam MN', 'Sitka', 'Skia', 'Snell Roundhand', 'Songti SC', 'Songti TC', 'STFangsong', 'STHeiti', 'STIXGeneral', 'STIXIntegralsD', 'STIXIntegralsSm', 'STIXIntegralsUp', 'STIXIntegralsUpD', 'STIXIntegralsUpSm', 'STIXNonUnicode', 'STIXSizeFiveSym', 'STIXSizeFourSym', 'STIXSizeOneSym', 'STIXSizeThreeSym', 'STIXSizeTwoSym', 'STIXVariants', 'STKaiti', 'STSong', 'STXihei', 'Sukhumvit Set', 'Suruma', 'Sylfaen', 'Symbol', 'Symbole', 'System Font', 'Tahoma', 'Tahoma Negreta', 'TakaoPGothic', 'Tamil MN', 'Tamil Sangam MN', 'Telugu MN', 'Telugu Sangam MN', 'Thonburi', 'Tibetan Machine Uni', 'Times', 'Times New Roman', 'Times Roman', 'Tlwg Mono', 'Tlwg Typewriter', 'Tlwg Typist', 'Tlwg Typo', 'Traditional Arabic', 'Trattatello', 'Trebuchet MS', 'Tunga', 'Ubuntu', 'Ubuntu Mono', 'Ukai', 'Uming', 'Umpush', 'Urdu Typesetting', 'Uroob', 'Utkal', 'Utsaah', 'Vani', 'Vemana2000', 'Verdana', 'Vijaya', 'Vrinda', 'Waree', 'Waseem', 'Webdings', 'Wingdings', 'Wingdings 2', 'Wingdings 3', 'Yu Gothic', 'Yu Mincho', 'Zapf Dingbats', 'Zapfino']; //  		var fonts = ["Times", "Times New Roman", "tata", "toto"];

        var baseFonts = ['serif', 'sans-serif', 'monospace'];
        var testSize = '72px';
        var testChar = 'A';
        var h = document.getElementsByTagName('body')[0]; // create a SPAN in the document to get the width of the text we use to test

        var s = document.createElement('span');
        s.style.fontSize = testSize;
        s.innerText = testChar;
        var defaultFonts = {};

        for (var indexBaseFonts in baseFonts) {
            baseFont = baseFonts[indexBaseFonts];
            s.style.fontFamily = baseFont;
            h.appendChild(s);
            defaultFonts[baseFont] = {};
            defaultFonts[baseFont]['offsetWidth'] = s.offsetWidth;
            defaultFonts[baseFont]['offsetHeight'] = s.offsetHeight;
            h.removeChild(s);
        }

        var fontsDetected = [];

        for (var indexFont in fonts) {
            font = fonts[indexFont];
            detected = false;
            fontStyle = '"' + font + '"';

            for (var indexBaseFonts in baseFonts) {
                baseFont = baseFonts[indexBaseFonts];
                s.style.fontFamily = fontStyle + ',' + baseFont; // name of the font along with the base font for fallback.

                h.appendChild(s);
                var match = s.offsetWidth != defaultFonts[baseFont]['offsetWidth'] || s.offsetHeight != defaultFonts[baseFont]['offsetHeight'];
                h.removeChild(s);
                detected = detected || match;
            }
            if (detected)
                fontsDetected.push(font);
        }

        return fontsDetected.join('!!');
    }

    function get_audio_formats() {
        try {
            var formatNames = ['audio/3gpp', 'audio/3gpp2', 'audio/AMR-NB', 'audio/AMR-WB', 'audio/GSM', 'audio/aac', 'audio/basic', 'audio/flac', 'audio/midi', 'audio/mpeg', 'audio/mp4; codecs="mp4a.40.2"', 'audio/mp4; codecs="ac-3"', 'audio/mp4; codecs="ec-3"', 'audio/ogg; codecs="flac"', 'audio/ogg; codecs="vorbis"', 'audio/ogg; codecs="opus"', 'audio/wav; codecs="1"', 'audio/webm; codecs="vorbis"', 'audio/webm; codecs="opus"', 'audio/x-aiff', 'audio/x-mpegurl'];
            var audioFormats = [];
            var element = document.createElement('audio');
            formatNames.forEach(function(format) {
                if ( !! element.canPlayType && (element.canPlayType(format) == 'probably' || element.canPlayType(format) == 'maybe')) {
                    audioFormats.push(format);
                }
            });
        } catch (e) {
            return "";
        }

        return audioFormats.join('!!');
    }

    function get_video_formats() {
        try {
            var formatNames = ['video/mp4; codecs="flac"', 'video/mp4; codecs="H.264, mp3"', 'video/mp4; codecs="H.264, aac"', 'video/mpeg; codec="H.264"', 'video/ogg; codecs="theora"', 'video/ogg; codecs="opus"', 'video/webm; codecs="vp9, opus"', 'video/webm; codecs="vp8, vorbis"'];
            var videoFormats = [];
            var element = document.createElement('video');
            formatNames.forEach(function(format) {
                if ( !! element.canPlayType && (element.canPlayType(format) == 'probably' || element.canPlayType(format) == 'maybe')) {
                    videoFormats.push(format);
                }
            });
        } catch (e) {
            return "";
        }

        return videoFormats.join('!!')
    }

    function get_webgl() {
        var webGLVendor, webGLRenderer, webGLData, webGLParameters;

        var fa2s = function fa2s(fa) {
            gl.clearColor(0.0, 0.0, 0.0, 1.0);
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            return "[" + fa[0] + ", " + fa[1] + "]";
        };

        var getGeneralParameters = function getGeneralParameters(webGLParameters, gl) {
            var fa2sParameters = ["ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "MAX_VIEWPORT_DIMS"];
            var generalParameterNames = ["ALPHA_BITS", "BLUE_BITS", "DEPTH_BITS", "GREEN_BITS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_RENDERBUFFER_SIZE", "MAX_RENDERBUFFER_SIZE", "MAX_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_SIZE", "MAX_VARYING_VECTORS", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_UNIFORM_VECTORS", "RED_BITS", "RENDERER", "SHADING_LANGUAGE_VERSION", "STENCIL_BITS", "VENDOR", "VERSION"];
            generalParameters = {};

            try {
                generalParameters["MAX_ANISOTROPY"] = maxAnisotropy(gl);
                generalParameters["ANTIALIAS"] = gl.getContextAttributes().antialias ? "yes" : "no";
                fa2sParameters.forEach(function(fa2sParameter) {
                    generalParameters[fa2sParameter] = fa2s(gl.getParameter(gl[fa2sParameter]));
                });
                generalParameterNames.forEach(function(generalParameterName) {
                    generalParameters[generalParameterName] = gl.getParameter(gl[generalParameterName]);
                });
                return generalParameters;
            } catch (e) {
                return "Not supported";
            }
        };

        var getShaderPrecisionParameters = function getShaderPrecisionParameters(webGLParameters, gl) {
            var shadersTypes = ["VERTEX_SHADER", "FRAGMENT_SHADER"];
            var numberTypes = ["HIGH_FLOAT", "MEDIUM_FLOAT", "LOW_FLOAT", "HIGH_INT", "MEDIUM_INT", "LOW_INT"];
            var parameters = ["precision", "rangeMin", "rangeMax"];
            shadersPrecisionParameters = {};

            try {
                shadersTypes.forEach(function(shaderType) {
                    numberTypes.forEach(function(numberType) {
                        parameters.forEach(function(parameter) {
                            var fullName = shaderType + " " + numberType + " " + parameter;
                            shadersPrecisionParameters[fullName] = gl.getShaderPrecisionFormat(gl[shaderType], gl[numberType])[parameter];
                        });
                    });
                });
                return shadersPrecisionParameters;
            } catch (e) {
                return "Not supported";
            }
        };

        var generateWebGLData = function generateWebGLData(gl) {
            try {
                var vShaderTemplate = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
                var fShaderTemplate = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
                var vertexPosBuffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
                var vertices = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
                vertexPosBuffer.itemSize = 3;
                vertexPosBuffer.numItems = 3;
                var program = gl.createProgram(),
                    vshader = gl.createShader(gl.VERTEX_SHADER);
                gl.shaderSource(vshader, vShaderTemplate);
                gl.compileShader(vshader);
                var fshader = gl.createShader(gl.FRAGMENT_SHADER);
                gl.shaderSource(fshader, fShaderTemplate);
                gl.compileShader(fshader);
                gl.attachShader(program, vshader);
                gl.attachShader(program, fshader);
                gl.linkProgram(program);
                gl.useProgram(program);
                program.vertexPosAttrib = gl.getAttribLocation(program, "attrVertex");
                program.offsetUniform = gl.getUniformLocation(program, "uniformOffset");
                gl.enableVertexAttribArray(program.vertexPosArray);
                gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
                gl.uniform2f(program.offsetUniform, 1, 1);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);

                if (gl.canvas != null) {
                    glData = gl.canvas.toDataURL().replace("data:image/png;base64,", "");
                    glData = atob(glData);
                    glData = btoa(glData.slice(-16, -12));
                    return glData
                }
                return "Not supported"
            } catch (e) {
                return "Not supported";
            }
        };

        var maxAnisotropy = function maxAnisotropy(gl) {
            var anisotropy,
                ext = gl.getExtension("EXT_texture_filter_anisotropic") || gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || gl.getExtension("MOZ_EXT_texture_filter_anisotropic");
            return ext ? (anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === anisotropy && (anisotropy = 2), anisotropy) : null;
        };

        try {
            canvas = document.createElement('canvas');
            var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

            if (gl.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0) {
                try {
                    webGLVendor = gl.getParameter(gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL);
                } catch (e) {
                    webGLVendor = "Not supported";
                }

                try {
                    webGLRenderer = gl.getParameter(gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL);
                } catch (e) {
                    webGLRenderer = "Not supported";
                }

                webGLData = generateWebGLData(gl);
                webGLParameters = {};
                webGLParameters["extensions"] = JSON.stringify(gl.getSupportedExtensions()).replace("\\\", \'");
                webGLParameters["general"] = getGeneralParameters(webGLParameters, gl);
                webGLParameters["shaderPrecision"] = getShaderPrecisionParameters(webGLParameters, gl);
            } else {
                webGLVendor = "Not supported";
                webGLRenderer = "Not supported";
                webGLParameters = "Not supported";
                webGLData = "Not supported";
            }
        } catch (e) {
            webGLVendor = "Not supported";
            webGLRenderer = "Not supported";
            webGLParameters = "Not supported";
            webGLData = "Not supported";
        }

        return {
            webGLVendor: webGLVendor,
            webGLRenderer: webGLRenderer,
            webGLFp: webGLData,
            webGLParameters: webGLParameters
        };
    }
    
    function get_audio_fp(data) {
        let context = null;
        let currentTime = null;
        let oscillator = null;
        let compressor = null;
        let fingerprint = null;
        let callback = null;
    
        function setup() {
            setContext();
            currentTime = context.currentTime;
            setOscillator();
            setCompressor();
        }
    
        function setContext() {
            let audioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            context = new audioContext(1, 44100, 44100);
        }
    
        function setOscillator() {
            oscillator = context.createOscillator();
            oscillator.type = "triangle";
            oscillator.frequency.setValueAtTime(10000, currentTime);
        }
    
        function setCompressor() {
            compressor = context.createDynamicsCompressor();
            setCompressorValueIfDefined('threshold', -50);
            setCompressorValueIfDefined('knee', 40);
            setCompressorValueIfDefined('ratio', 12);
            setCompressorValueIfDefined('reduction', -20);
            setCompressorValueIfDefined('attack', 0);
            setCompressorValueIfDefined('release', .25);
        }
    
        function setCompressorValueIfDefined(item, value) {
            if (compressor[item] !== undefined && typeof compressor[item].setValueAtTime === 'function') {
                compressor[item].setValueAtTime(value, context.currentTime);
            }
        }
    
        function onComplete(event) {
            generateFingerprints(event);
            compressor.disconnect();
        }
    
        function generateFingerprints(event) {
            let output = null;
            for (let i = 4500; 5e3 > i; i++) {
                let channelData = event.renderedBuffer.getChannelData(0)[i];
                output += Math.abs(channelData);
            }
            fingerprint = output.toString();
            if (typeof callback === 'function') {
                return callback(fingerprint);
            }
        }
    
        callback = function (fingerprint) {
            data.fp.audio = fingerprint;
        };
    
        setup();
        oscillator.connect(compressor);
        compressor.connect(context.destination);
        oscillator.start(0);
        context.startRendering();
        context.oncomplete = onComplete;
    
    }
    
    function get_ip_webrtc(data) {
        let RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        if (RTCPeerConnection) (function () {
            let rtc = new RTCPeerConnection({iceServers: []});
            if (1 || window.mozRTCPeerConnection) {
                rtc.createDataChannel('', {
                    reliable: false
                });
            }
    
            rtc.onicecandidate = function (evt) {
                if (evt.candidate) grepSDP("a=" + evt.candidate.candidate);
            };
            rtc.createOffer(function (offerDesc) {
                grepSDP(offerDesc.sdp);
                rtc.setLocalDescription(offerDesc);
            }, function (e) {
                //console.warn("offer failed", e);
            });
    
    
            let addrs = [];
    
            function updateDisplay(newAddr) {
                if (newAddr in addrs || !newAddr) return;
                else addrs.push(newAddr);
                data.ip_webrtc = addrs.join("!!");
            }
    
            function grepSDP(sdp) {
                sdp.split('\r\n').forEach(function (line, index, arr) {
                    if (~line.indexOf("a=candidate")) {
                        let parts = line.split(' '),
                            addr = parts[4],
                            type = parts[7];
                        if (type === 'host') updateDisplay(addr);
                    } else if (~line.indexOf("c=")) {
                        let parts = line.split(' '),
                            addr = parts[2];
                        updateDisplay(addr);
                    }
                });
            }
        })();
    }

    var data = {
        ua: navigator.userAgent,
        screen: [screen.width, screen.height, screen.availWidth, screen.availHeight, screen.availLeft, screen.availTop].join('*'),
        plugins: get_plugins(),
        flash: JSON.stringify(get_flash()),
        languages: navigator.languages.join('!'),
        fp: {
            canvas: get_canvas_fp(),
        },
        audio_formats: get_audio_formats(),
        video_formats: get_video_formats(),
        time_zone: new Date().getTimezoneOffset() / 60
    }
    
    get_audio_fp(data);
    get_ip_webrtc(data);
    
    setTimeout(function() {
        var webgl = get_webgl();
        data.fonts = get_fonts(),
        data.fp.webgl = webgl.webGLFp;
        data.webgl = JSON.stringify({
            vendor: webgl.webGLVendor,
            renderer: webgl.webGLRenderer,
            parameters: webgl.webGLParameters
        })
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://collect.tiantest.com/feature/collect.php', true);
        xhr.send(JSON.stringify(data));
        localStorage["has_log_njcdds"] = "true"
    }, 100);

})();