import { Container, Row, Col } from '../Layout';
import loadingScreenStyles from './LoadingScreen.styles';
import theme from '../../global/theme';

function LoadingScreen() {
  return (
    <div css={loadingScreenStyles(theme)}>
      <Container>
        <Row>
          <Col fraction={1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="70"
              height="70"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 50000 50000"
            >
              <defs>
                <linearGradient id="a" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0" stopColor="#00E2AC" />
                  <stop offset="1" stopColor="#D21F87" />
                </linearGradient>
                <linearGradient id="b" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0" stopColor="#00E2AC" />
                  <stop offset="1" stopColor="#D21F87" />
                </linearGradient>
              </defs>
              <g fillRule="nonzero">
                <path
                  fill="#fff"
                  d="M43097 19400c570 292 1063 715 1472 1264 506 680 744 1654 793 2719 49 1098-97 2335-350 3409-174 734-494 1809-1035 2751-430 746-1000 1408-1754 1790-346 176-686 303-1017 389-382 100-734 143-1059 143-31 0-61 0-92-1-257 1031-568 2097-946 3170-460 1301-1015 2608-1685 3868-946 1779-2045 3375-3268 4748-1228 1382-2587 2541-4040 3440-934 576-1802 980-2547 1258-2330 868-2810 868-5140 0-746-278-1614-682-2547-1258-1454-899-2812-2059-4042-3441-1221-1372-2321-2968-3267-4747-723-1361-1312-2776-1792-4180-330-967-607-1926-838-2858-31 1-62 1-92 1-325 0-677-43-1060-143-330-86-671-213-1017-389-753-382-1324-1044-1754-1790-541-942-861-2017-1034-2751-253-1074-398-2311-349-3410 47-1064 286-2038 792-2718 444-598 982-1044 1600-1332 207-96 422-175 644-234-50-926-51-2142 112-3501 256-2137 918-4632 2426-6942v-4c1759-2692 4204-4608 7154-5854 3091-1305 6727-1860 10694-1793 911 15 1742 84 2498 195 2919 432 5015 1514 6388 2793 1222 1139 1890 2456 2073 3658 1405 385 3443 1745 3851 6339 98 1114 84 2189 17 3140-56 783-146 1492-237 2075 153 57 303 122 448 196z"
                />
                <path
                  fill="#111218"
                  d="M8877 23273c-779-249-1237 305-1237 305 974-118 1154 483 1154 483s-858 560-678 1611c179 1050 974 1423 974 1423-1071-1741 553-2625 553-2625s118-913-766-1197zm21340 11756c-1085-608-1860-642-1860-642 1577-1632-207-3318-207-3318 1078 2198-802 2681-802 2681 318-386 249-1036 249-1036-877 1700-2598 1520-2598 1520s-1721 180-2599-1520c0 0-68 650 250 1036 0 0-1881-483-802-2681 0 0-1784 1686-208 3318 0 0-774 34-1858 642-1086 607-2302 615-3020-77 0 0 1202 2820 3883 2972s4354-1217 4354-1217 1672 1369 4353 1217c2682-152 3884-2972 3884-2972-718 692-1935 684-3019 77zm10903-11756c-883 284-765 1197-765 1197s1624 884 553 2625c0 0 793-373 974-1423 180-1051-678-1611-678-1611s180-601 1154-483c0 0-458-554-1238-305zm1441 2945c-345 1464-923 2591-1474 2871-562 285-1051 336-1456 149-101-46-183-102-247-152 175-975 301-1886 392-2697 222-1989 267-3634 265-4680 570-235 1760-555 2508 454 354 475 457 2160 12 4055zm-6021 7726c-1483 4315-4802 7006-6830 8311-1147 737-2676 466-3479-636-200-274-383-585-527-930l-705 1-705-1c-144 345-327 656-527 930-803 1102-2333 1373-3480 636-2028-1305-5347-3996-6829-8311-1560-4547-1345-8333-1083-10169-47 1948 413 4080 1622 4975 683 507 2346 947 4041 1073 271 18 591 34 941 34 1222 0 2799-184 3819-996 1780-1416 1719-3989 1615-5003 123-43 311-83 586-83s463 40 586 83c-104 1014-166 3587 1614 5003 1021 812 2598 996 3820 996 350 0 670-16 940-34 1695-126 3358-566 4042-1073 1210-895 1669-3027 1622-4975 262 1836 477 5622-1083 10169zm-26173-4706c-405 187-895 136-1456-149-551-280-1130-1407-1475-2871-446-1895-341-3580 12-4055 749-1009 1939-689 2509-454-2 1046 43 2691 265 4680 91 811 217 1722 392 2697-64 50-147 106-247 152zm3456-6278c1316-599 5829-2279 9303 903 81 676 232 2917-1124 3997-710 564-2120 815-3869 686-1572-115-2951-509-3375-825-797-590-1255-2558-1066-4578 8-80 58-150 131-183zm22483 183c189 2020-269 3988-1066 4578-425 316-1803 710-3374 825-1750 129-3161-122-3871-686-1356-1080-1203-3321-1123-3997 3474-3182 7987-1502 9303-903 73 33 123 103 131 183zm-4721-10291c1679 2945 4181 3539 4181 3539s162 3455 1592 4906l-555 548c-32-18-64-34-97-49h-1c-285-130-702-304-1218-475-159-626-881-2327-3992-2055-3495 304-4968 1707-4924 3178-119 92-239 189-357 291-279-132-673-239-1215-239s-937 107-1216 239c-118-102-236-199-355-291 42-1471-1430-2874-4925-3178-3112-272-3833 1429-3993 2055-516 171-933 345-1217 475-35 15-67 31-98 49l-556-548c1067-1082 1428-3280 1543-4326 11270 758 17403-4119 17403-4119zm11992 8548c-589-794-1401-1207-2369-1213 202-932 666-3460 432-6091-520-5846-3833-5348-3833-5348 356-2405-2428-6386-9768-6510-7338-125-13434 1949-16792 7091-2770 4240-2438 9240-2236 10864-1067-59-1957 353-2590 1207-752 1012-657 3296-231 5111 264 1117 891 3085 2141 3719 562 285 1072 397 1520 397 391 0 733-86 1025-214 537 2499 1402 5296 2791 7909 1800 3386 4174 6055 6864 7718 2160 1334 3913 1647 4452 1659v1h32v-1c540-12 2292-325 4452-1659 2691-1663 5064-4332 6864-7718 1389-2613 2253-5410 2791-7909 291 128 634 214 1025 214 448 0 958-112 1520-397 1250-634 1877-2602 2140-3719 428-1815 522-4099-230-5111zM21557 38830s1003 1457 3442 1457 3442-1457 3442-1457-1520 539-3442 539-3442-539-3442-539z"
                />
                <path
                  fill="url(#a)"
                  className="shades"
                  d="M36313 23141c190 2018-268 3987-1065 4578-426 314-1804 709-3375 824-1749 129-3159-121-3869-687-1356-1078-1205-3319-1124-3997 3473-3181 7987-1501 9303-901 73 33 123 103 130 183z"
                />
                <path
                  fill="url(#b)"
                  className="shades"
                  d="M13830 22958c1317-600 5830-2280 9304 901 80 678 231 2919-1125 3997-708 566-2120 816-3869 687-1571-115-2949-510-3375-824-797-591-1255-2560-1065-4578 7-80 58-150 130-183z"
                />
              </g>
            </svg>
            <div className="progressbar">
              <div className="stylization" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoadingScreen;
