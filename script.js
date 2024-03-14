function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
  
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  
  
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
    var data = `
    ./Img/Demo - Made with Clipchamp_000.webp
./Img/Demo - Made with Clipchamp_001.webp
./Img/Demo - Made with Clipchamp_002.webp
./Img/Demo - Made with Clipchamp_003.webp
./Img/Demo - Made with Clipchamp_004.webp
./Img/Demo - Made with Clipchamp_005.webp
./Img/Demo - Made with Clipchamp_006.webp
./Img/Demo - Made with Clipchamp_007.webp
./Img/Demo - Made with Clipchamp_008.webp
./Img/Demo - Made with Clipchamp_009.webp
./Img/Demo - Made with Clipchamp_010.webp
./Img/Demo - Made with Clipchamp_011.webp
./Img/Demo - Made with Clipchamp_012.webp
./Img/Demo - Made with Clipchamp_013.webp
./Img/Demo - Made with Clipchamp_014.webp
./Img/Demo - Made with Clipchamp_015.webp
./Img/Demo - Made with Clipchamp_016.webp
./Img/Demo - Made with Clipchamp_017.webp
./Img/Demo - Made with Clipchamp_018.webp
./Img/Demo - Made with Clipchamp_019.webp
./Img/Demo - Made with Clipchamp_020.webp
./Img/Demo - Made with Clipchamp_021.webp
./Img/Demo - Made with Clipchamp_022.webp
./Img/Demo - Made with Clipchamp_023.webp
./Img/Demo - Made with Clipchamp_024.webp
./Img/Demo - Made with Clipchamp_025.webp
./Img/Demo - Made with Clipchamp_026.webp
./Img/Demo - Made with Clipchamp_027.webp
./Img/Demo - Made with Clipchamp_028.webp
./Img/Demo - Made with Clipchamp_029.webp
./Img/Demo - Made with Clipchamp_030.webp
./Img/Demo - Made with Clipchamp_031.webp
./Img/Demo - Made with Clipchamp_032.webp
./Img/Demo - Made with Clipchamp_033.webp
./Img/Demo - Made with Clipchamp_034.webp
./Img/Demo - Made with Clipchamp_035.webp
./Img/Demo - Made with Clipchamp_036.webp
./Img/Demo - Made with Clipchamp_037.webp
./Img/Demo - Made with Clipchamp_038.webp
./Img/Demo - Made with Clipchamp_039.webp
./Img/Demo - Made with Clipchamp_040.webp
./Img/Demo - Made with Clipchamp_041.webp
./Img/Demo - Made with Clipchamp_042.webp
./Img/Demo - Made with Clipchamp_043.webp
./Img/Demo - Made with Clipchamp_044.webp
./Img/Demo - Made with Clipchamp_045.webp
./Img/Demo - Made with Clipchamp_046.webp
./Img/Demo - Made with Clipchamp_047.webp
./Img/Demo - Made with Clipchamp_048.webp
./Img/Demo - Made with Clipchamp_049.webp
./Img/Demo - Made with Clipchamp_050.webp
./Img/Demo - Made with Clipchamp_051.webp
./Img/Demo - Made with Clipchamp_052.webp
./Img/Demo - Made with Clipchamp_053.webp
./Img/Demo - Made with Clipchamp_054.webp
./Img/Demo - Made with Clipchamp_055.webp
./Img/Demo - Made with Clipchamp_056.webp
./Img/Demo - Made with Clipchamp_057.webp
./Img/Demo - Made with Clipchamp_058.webp
./Img/Demo - Made with Clipchamp_059.webp
./Img/Demo - Made with Clipchamp_060.webp
./Img/Demo - Made with Clipchamp_061.webp
./Img/Demo - Made with Clipchamp_062.webp
./Img/Demo - Made with Clipchamp_063.webp
./Img/Demo - Made with Clipchamp_064.webp
./Img/Demo - Made with Clipchamp_065.webp
./Img/Demo - Made with Clipchamp_066.webp
./Img/Demo - Made with Clipchamp_067.webp
./Img/Demo - Made with Clipchamp_068.webp
./Img/Demo - Made with Clipchamp_069.webp
./Img/Demo - Made with Clipchamp_070.webp
./Img/Demo - Made with Clipchamp_071.webp
./Img/Demo - Made with Clipchamp_072.webp
./Img/Demo - Made with Clipchamp_073.webp
./Img/Demo - Made with Clipchamp_074.webp
./Img/Demo - Made with Clipchamp_075.webp
./Img/Demo - Made with Clipchamp_076.webp
./Img/Demo - Made with Clipchamp_077.webp
./Img/Demo - Made with Clipchamp_078.webp
./Img/Demo - Made with Clipchamp_079.webp
./Img/Demo - Made with Clipchamp_080.webp
./Img/Demo - Made with Clipchamp_081.webp
./Img/Demo - Made with Clipchamp_082.webp
./Img/Demo - Made with Clipchamp_083.webp
./Img/Demo - Made with Clipchamp_084.webp
./Img/Demo - Made with Clipchamp_085.webp
./Img/Demo - Made with Clipchamp_086.webp
./Img/Demo - Made with Clipchamp_087.webp
./Img/Demo - Made with Clipchamp_088.webp
./Img/Demo - Made with Clipchamp_089.webp
./Img/Demo - Made with Clipchamp_090.webp
./Img/Demo - Made with Clipchamp_091.webp
./Img/Demo - Made with Clipchamp_092.webp
./Img/Demo - Made with Clipchamp_093.webp
./Img/Demo - Made with Clipchamp_094.webp
./Img/Demo - Made with Clipchamp_095.webp
./Img/Demo - Made with Clipchamp_096.webp
./Img/Demo - Made with Clipchamp_097.webp
./Img/Demo - Made with Clipchamp_098.webp
./Img/Demo - Made with Clipchamp_099.webp
./Img/Demo - Made with Clipchamp_100.webp
./Img/Demo - Made with Clipchamp_101.webp
./Img/Demo - Made with Clipchamp_102.webp
./Img/Demo - Made with Clipchamp_103.webp
./Img/Demo - Made with Clipchamp_104.webp
./Img/Demo - Made with Clipchamp_105.webp
./Img/Demo - Made with Clipchamp_106.webp
./Img/Demo - Made with Clipchamp_107.webp
./Img/Demo - Made with Clipchamp_108.webp
./Img/Demo - Made with Clipchamp_109.webp
./Img/Demo - Made with Clipchamp_110.webp
./Img/Demo - Made with Clipchamp_111.webp
./Img/Demo - Made with Clipchamp_112.webp
./Img/Demo - Made with Clipchamp_113.webp
./Img/Demo - Made with Clipchamp_114.webp
./Img/Demo - Made with Clipchamp_115.webp
./Img/Demo - Made with Clipchamp_116.webp
./Img/Demo - Made with Clipchamp_117.webp
./Img/Demo - Made with Clipchamp_118.webp
./Img/Demo - Made with Clipchamp_119.webp
./Img/Demo - Made with Clipchamp_120.webp
./Img/Demo - Made with Clipchamp_121.webp
./Img/Demo - Made with Clipchamp_122.webp
./Img/Demo - Made with Clipchamp_123.webp
./Img/Demo - Made with Clipchamp_124.webp
./Img/Demo - Made with Clipchamp_125.webp
./Img/Demo - Made with Clipchamp_126.webp
./Img/Demo - Made with Clipchamp_127.webp
./Img/Demo - Made with Clipchamp_128.webp
./Img/Demo - Made with Clipchamp_129.webp
./Img/Demo - Made with Clipchamp_130.webp
./Img/Demo - Made with Clipchamp_131.webp
./Img/Demo - Made with Clipchamp_132.webp
./Img/Demo - Made with Clipchamp_133.webp
./Img/Demo - Made with Clipchamp_134.webp
./Img/Demo - Made with Clipchamp_135.webp
./Img/Demo - Made with Clipchamp_136.webp
./Img/Demo - Made with Clipchamp_137.webp
./Img/Demo - Made with Clipchamp_138.webp
./Img/Demo - Made with Clipchamp_139.webp
./Img/Demo - Made with Clipchamp_140.webp
./Img/Demo - Made with Clipchamp_141.webp
./Img/Demo - Made with Clipchamp_142.webp
./Img/Demo - Made with Clipchamp_143.webp
./Img/Demo - Made with Clipchamp_144.webp
./Img/Demo - Made with Clipchamp_145.webp
./Img/Demo - Made with Clipchamp_146.webp
./Img/Demo - Made with Clipchamp_147.webp
./Img/Demo - Made with Clipchamp_148.webp
./Img/Demo - Made with Clipchamp_149.webp
./Img/Demo - Made with Clipchamp_150.webp
./Img/Demo - Made with Clipchamp_151.webp
./Img/Demo - Made with Clipchamp_152.webp
./Img/Demo - Made with Clipchamp_153.webp
./Img/Demo - Made with Clipchamp_154.webp
./Img/Demo - Made with Clipchamp_155.webp
./Img/Demo - Made with Clipchamp_156.webp
./Img/Demo - Made with Clipchamp_157.webp
./Img/Demo - Made with Clipchamp_158.webp
./Img/Demo - Made with Clipchamp_159.webp
./Img/Demo - Made with Clipchamp_160.webp
./Img/Demo - Made with Clipchamp_161.webp
./Img/Demo - Made with Clipchamp_162.webp
./Img/Demo - Made with Clipchamp_163.webp
./Img/Demo - Made with Clipchamp_164.webp
./Img/Demo - Made with Clipchamp_165.webp
./Img/Demo - Made with Clipchamp_166.webp
./Img/Demo - Made with Clipchamp_167.webp
./Img/Demo - Made with Clipchamp_168.webp
./Img/Demo - Made with Clipchamp_169.webp
./Img/Demo - Made with Clipchamp_170.webp
./Img/Demo - Made with Clipchamp_171.webp
./Img/Demo - Made with Clipchamp_172.webp
./Img/Demo - Made with Clipchamp_173.webp
./Img/Demo - Made with Clipchamp_174.webp
./Img/Demo - Made with Clipchamp_175.webp
./Img/Demo - Made with Clipchamp_176.webp
./Img/Demo - Made with Clipchamp_177.webp
./Img/Demo - Made with Clipchamp_178.webp
./Img/Demo - Made with Clipchamp_179.webp
./Img/Demo - Made with Clipchamp_180.webp
./Img/Demo - Made with Clipchamp_181.webp
./Img/Demo - Made with Clipchamp_182.webp
./Img/Demo - Made with Clipchamp_183.webp
./Img/Demo - Made with Clipchamp_184.webp
./Img/Demo - Made with Clipchamp_185.webp
./Img/Demo - Made with Clipchamp_186.webp
./Img/Demo - Made with Clipchamp_187.webp
./Img/Demo - Made with Clipchamp_188.webp
./Img/Demo - Made with Clipchamp_189.webp
./Img/Demo - Made with Clipchamp_190.webp
./Img/Demo - Made with Clipchamp_191.webp
./Img/Demo - Made with Clipchamp_192.webp
./Img/Demo - Made with Clipchamp_193.webp
./Img/Demo - Made with Clipchamp_194.webp
./Img/Demo - Made with Clipchamp_195.webp
./Img/Demo - Made with Clipchamp_196.webp
./Img/Demo - Made with Clipchamp_197.webp
./Img/Demo - Made with Clipchamp_198.webp
./Img/Demo - Made with Clipchamp_199.webp
./Img/Demo - Made with Clipchamp_200.webp
./Img/Demo - Made with Clipchamp_201.webp
./Img/Demo - Made with Clipchamp_202.webp
./Img/Demo - Made with Clipchamp_203.webp
./Img/Demo - Made with Clipchamp_204.webp
./Img/Demo - Made with Clipchamp_205.webp
  `;
    return data.split("\n")[index];
  }

const frameCount = 206;

const images = [];
const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 5,
      trigger: `#page1>canvas`,
      start: `top top`,
      end: `1000% bottom`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  
  function render() {
      scaleImage(images[imageSeq.frame], context);
    }
  
    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
  
  
  
  ScrollTrigger.create({
      trigger: "#page1>canvas",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `1000% bottom`,
    });
  

  window.addEventListener("load", function(){
    document.querySelector('#main').style.height = 'auto';
          gsap.to('.loader',{
            y:'-100%',
          })
  })
  