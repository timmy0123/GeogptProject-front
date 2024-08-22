import layerGetter from "./getter.js";

export default {
  namespaced: true,
  state() {
    return {
      mapLayer: [
        {
          name: "1904-日治臺灣堡圖(明治版)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1904-jpg-{z}-{x}-{y}",
        },
        {
          name: "1905-日治臺灣圖",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM100K_1905-png-{z}-{x}-{y}",
        },
        {
          name: "1916-日治蕃地地形圖",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM50K_1916-jpg-{z}-{x}-{y}",
        },
        {
          name: "1920-日治地形圖(總督府土木局)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM50K_1920-png-{z}-{x}-{y}",
        },
        {
          name: "1921-日治地形圖",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM25K_1921-jpg-{z}-{x}-{y}",
        },
        {
          name: "1921-日治臺灣堡圖(大正版)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1921-jpg-{z}-{x}-{y}",
        },
        {
          name: "1924-日治地形圖(陸地測量部)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM50K_1924-jpg-{z}-{x}-{y}",
        },
        {
          name: "縣市界",
          url: "http://wmts.nlsc.gov.tw/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=image/png&STYLE=_null&LAYER=CITY&zSET=EPSG:3857&z={z}&x={x}&y={y}",
        },
        {
          name: "鄉鎮區界",
          url: "http://wmts.nlsc.gov.tw/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=image/png&STYLE=_null&LAYER=TOWN&zSET=EPSG:3857&z={z}&x={x}&y={y}",
        },
        {
          name: "村里界",
          url: "http://wmts.nlsc.gov.tw/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&FORMAT=image/png&STYLE=_null&LAYER=Village&zSET=EPSG:3857&z={z}&x={x}&y={y}",
        },
        {
          name: "坡向圖",
          url: "https://wmts.nlsc.gov.tw/wmts/MOI_ASPECT/_null/EPSG:3857/{z}/{y}/{x}",
        },
        {
          name: "坡度圖-30%坡(2010-2015)",
          url: "https://wmts.nlsc.gov.tw/wmts/MOI_SLOPEP_GT30_2/_null/EPSG:3857/{z}/{y}/{x}",
        },
        {
          name: "坡度圖-7級(2010-2015)",
          url: "https://wmts.nlsc.gov.tw/wmts/MOI_SLOPEP_LV7_2/_null/EPSG:3857/{z}/{y}/{x}",
        },
        {
          name: "魯地圖 Taiwan TOPO",
          url: "https://tile.happyman.idv.tw/map/moi_osm/{z}/{x}/{y}.png",
        },
        {
          name: "1901-日治行政區_街庄(1900年代)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1901c-png-{z}-{x}-{y}",
        },
        {
          name: "1901-日治行政區_堡里(1900年代)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1901b-png-{z}-{x}-{y}",
        },
        {
          name: "1901-日治行政區_廳(1900年代)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1901a-png-{z}-{x}-{y}",
        },
        {
          name: "1930-日治行政區_街庄(1930年代)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1930c-png-{z}-{x}-{y}",
        },
        {
          name: "1930-日治行政區_郡市(1930年代)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1930b-png-{z}-{x}-{y}",
        },
        {
          name: "1930-日治行政區_州廳(1930年代)",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=Admin_1930a-png-{z}-{x}-{y}",
        },
        {
          name: "1905-日治十萬分一臺灣圖-1:100,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM100K_1905-png-{z}-{x}-{y}",
        },
        {
          name: "1931-臺灣公共埤圳組合及水利組合灌溉排水區域圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM1M_1931-png-{z}-{x}-{y}",
        },
        {
          name: "1897-日治臺灣假製二十萬分一圖-1:200,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM200K_1897-png-{z}-{x}-{y}",
        },
        {
          name: "1897-日治臺灣假製二十萬分一圖(雙色複製版)-1:200,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM200K_1897_new-png-{z}-{x}-{y}",
        },
        {
          name: "1932-日治二十萬分一帝國圖(臺灣部分)",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM200K_1932-png-{z}-{x}-{y}",
        },
        {
          name: "1944-日治二十萬分一帝國圖(聯勤翻印版)",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM200K_1944-png-{z}-{x}-{y}",
        },
        {
          name: "1904-日治臺灣堡圖(明治版)-1:20,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1904-jpg-{z}-{x}-{y}",
        },
        {
          name: "1904-日治初期臺灣三角測量點及水準點配置圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM20K_1904_triangulation-png-{z}-{x}-{y}",
        },
        {
          name: "1944-日治地形圖(航照修正版)-1:25,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=JM25K_1944-png-{z}-{x}-{y}",
        },
        {
          name: "1944-美軍地形圖",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=AM50K_1944-png-{z}-{x}-{y}",
        },
        {
          name: "1944-美軍航照圖-1:25,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=AM25K_1944B-png-{z}-{x}-{y}",
        },
        {
          name: "1944-美軍地形圖-1:50,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=AM50K_1944-png-{z}-{x}-{y}",
        },
        {
          name: "1945-美軍繪製臺灣城市地圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=AMCityPlan_1945-png-{z}-{x}-{y}",
        },
        {
          name: "1956-臺灣土地利用及林型圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=1956_Landuse-png-{z}-{x}-{y}",
        },
        {
          name: "1956-臺灣省土地利用及林型分類圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=1956_Landuse_250K_1-png-{z}-{x}-{y}",
        },
        {
          name: "1956-臺灣省材積級與及保育問題等級圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=1956_Landuse_250K_2-png-{z}-{x}-{y}",
        },
        {
          name: "1959-臺灣海岸及耕地防風林狀況圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=1959_Landuse_windbreak_25K-png-{z}-{x}-{y}",
        },
        {
          name: "1974-臺灣山坡地土地利用現況圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=1974_Landuse_250K-png-{z}-{x}-{y}",
        },
        {
          name: "1953-臺糖鐵道網圖-1:150,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM150K_1953-png-{z}-{x}-{y}",
        },
        {
          name: "臺灣五萬分之一衛星影像地圖(921災區)",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_2000A-png-{z}-{x}-{y}",
        },
        {
          name: "臺灣五萬分之一衛星影像地形圖(921災區)",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_2000B-png-{z}-{x}-{y}",
        },
        {
          name: "2003-臺灣經建3版地形圖-1:50,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_2003-png-{z}-{x}-{y}",
        },
        {
          name: "1962-臺灣西海岸海埔地地形圖",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM5K_1962-png-{z}-{x}-{y}",
        },
        {
          name: "1966-Corona衛星影像",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=Taiwan_Corona_1966-png-{z}-{x}-{y}",
        },
        {
          name: "1969-Corona衛星影像",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=Taiwan_Corona_1969-png-{z}-{x}-{y}",
        },
        {
          name: "1933-新高登山地圖-1:50,000",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=Yushan_50K_1933-png-{z}-{x}-{y}",
        },
        {
          name: "乾隆臺灣番界（柯志明、陳兆勇考證繪製）",
          url: "https://gis.sinica.edu.tw/tileserver/file-exists.php?img=abm-png-{z}-{x}-{y}",
        },
        {
          name: "1956-臺灣地形圖 1:50000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_1956-jpg-{z}-{x}-{y}",
        },
        {
          name: "1987-臺灣地形圖 1:100000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM100K_1987-png-{z}-{x}-{y}",
        },
        {
          name: "1989-經建一版地形圖 1:25000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_1989-jpg-{z}-{x}-{y}",
        },
        {
          name: "1990-經建一版地形圖 1:50000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_1990-png-{z}-{x}-{y}",
        },
        {
          name: "1993-經建二版地形圖 1:25000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_1993-jpg-{z}-{x}-{y}",
        },
        {
          name: "1996-經建二版地形圖 1:50000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_1996-png-{z}-{x}-{y}",
        },
        {
          name: "2001-經建三版地形圖 1:25000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_2001-jpg-{z}-{x}-{y}",
        },
        {
          name: "2002-經建三版地形圖 1:50000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM50K_2002-png-{z}-{x}-{y}",
        },
        {
          name: "2003-經建四版地形圖 1:25000",
          url: "http://gis.sinica.edu.tw/tileserver/file-exists.php?img=TM25K_2003-jpg-{z}-{x}-{y}",
        },
        {
          name: "地圖產生器 1:25000",
          url: "http://rs.happyman.idv.tw/map/tw25k2001/zxy/{z}_{x}_{y}.png",
        },
        {
          name: "通用版電子地圖",
          url: "http://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP&STYLE=_null&zSET=EPSG:3857&z=EPSG:3857:{z}&y={y}&x={x}&FORMAT=image/png",
        },
        {
          name: "通用版電子地圖(含等高線)",
          url: "http://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP5&STYLE=_null&zSET=EPSG:3857&z=EPSG:3857:{z}&y={y}&x={x}&FORMAT=image/png",
        },
        {
          name: "通用版電子地圖透明",
          url: "http://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP2&STYLE=_null&zSET=EPSG:3857&z=EPSG:3857:{z}&y={y}&x={x}&FORMAT=image/png",
        },
        {
          name: "通用版電子地圖透明(含建物)",
          url: "http://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=EMAP1&STYLE=_null&zSET=EPSG:3857&z=EPSG:3857:{z}&y={y}&x={x}&FORMAT=image/png",
        },
        {
          name: "通用版電子地圖正射影像圖",
          url: "http://maps.nlsc.gov.tw/S_Maps/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=PHOTO2&STYLE=_null&zSET=EPSG:3857&z=EPSG:3857:{z}&y={y}&x={x}&FORMAT=image/png",
        },
      ],
    };
  },
  getters: layerGetter,
};
