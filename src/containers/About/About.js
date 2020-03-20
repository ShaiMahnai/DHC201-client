import React, { Component } from 'react';

export class About extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="about" >
            <p>הפרוייקט נבנה כחלק מקורס "מדעי הרוח הדיגיטליים" במסגרת התואר הראשון במדעי המחשב באוניברסיטת בן גוריון, באר שבע: <a href="https://www.cs.bgu.ac.il/~tdh201/Main">https://www.cs.bgu.ac.il/~tdh201/Main</a>, בהנחיית ד"ר יעל נצר.</p>
            <p>כתושבי באר שבע, שמחנו לגלות על מאגר המידע המתקדם של העירייה, וראינו את עצם ביצוע הפרוייקט בנושא זה כמעניין וחשוב כאחד.</p>

            <u>צד שרת</u>
            <p>במסגרת העבודה על צד השרת הקמנו פרוייקט Dot Net Core בשפת C#.</p>
            <p>פעלנו מול OpenData API של עיריית  באר שבע בכתובת: <a target="blank" href="https://www.beer-sheva.muni.il/OpenData/Pages/Data.aspx">https://www.beer-sheva.muni.il/OpenData/Pages/Data.aspx</a> </p>

            <p>פנינו למאגרים שונים ב-API הזה, ביניהם:
            מספרי בתים ושמות הרחובות, שמות הרחובות בעיר ועוד.  השתמשנו בשדות כמו: מתי אושר הרחוב בוועדות העירייה, באיזה שכונה הרחוב או האם הרחוב קרוי על שם אישה, זאת בשביל להציג מידע שחשבנו שיעניין את צופי הפרויקט, וכן עניין אותנו בתור תושבי העיר.</p>
            <p>גילינו שקיים במאגר עוד מידע רב שניתן להשתמש בו ולהציגו, כמו מגרשי משחקים בעיר, גינות כלבים, תחנות דלק וכו'. שמחנו שבנינו את הבסיס בשביל שאנשים נוספים יוכלו להשתמש במה שכבר יצרנו ולהרחיב את הפרויקט בקלות, ע"י גישה למאגר הרצוי באתר העירייה והוספה שלו לפרויקט הקיים.</p>
            <p>המידע הקיים במאגר הוא מאוד עשיר, אבל לא תמיד מוצג בסטנדרטים נכונים של json, לדוגמא:
                 האם הרחוב קיים או לא בפועל, מוצג בשדה status והערך יהיה במקרה והוא קיים - "קיים".
                אחת ממטורתיינו הייתה להציג את המידע בסטנדרטים גבוהים, כך שבדוגמא הזו יהיה שדה בוליאני בשם Exist.
            </p>

            <p>בנוסף, המידע שהגיע מהמאגר של עיריית באר שבע היה חסר בקואורדינטות  GPS, ולכן היה עלינו להעשיר את המידע בכדי שנוכל להציג אותו על מפה באתר שלנו.
                 לצורך כך השתמשנו <a href="https://www.openstreetmap.org/">OpenStreetMap</a>  וכן ב <a href="https://developers.google.com/maps/documentation">Googleapis</a> של Google maps, בעזרתם הוצאנו את הקוארדינטות הרלוונטיות לכל רחוב. </p>
            <p>מצאנו את המידע בOpenStreetMap  כנכון ויעיל יותר (מחזיר רצף קואורדינטות של רחוב ולא מספר נקודות / נקודה בודדת), ולכן העדפנו לפנות אליו קודם, ורק אם לא נמצא הרחוב במאגר זה, פנינו לAPI של Google.</p>

            <p>התמודדנו עם קשיים והתלבטויות בנוגע לעיבוד האוטומטי של המידע, כאשר לא תמיד קריאה ל-API עם שם הרחוב החזירה לנו את הערך הנכון.  < br />
                לדוגמא:  רחוב הרב חיים משה אלישר (כך מגיע השם ממאגר העירייה) לא נמצא במאגרים של openstreetmap,
                בעוד רחוב אלישר דווקא כן מופיע. לכן ביצענו התאמות ועיבוד לשמות הרחובות, כך שנציג מידע רב ואמין ככל הניתן.<br />
                דוגמא נוספת: בבאר שבע קיימים רחובות דוד בן גוריון ו-פולה בן גוריון. חיפוש ב-openstreetmap עבור שם הרחוב פולה בן גוריון לא החזיר תוצאות, בעוד חיפוש עבור השם "בן גוריון", החזיר תוצאות רלוונטיות עבור רחוב דוד בן גוריון.  לכן, נאלצנו לנהל גם "רשימה שחורה"  - רשימת רחובות שלא נציג במפה מאחר ואין עבורם את כל המידע הנחוץ.
                </p>



            <p> העלנו את קוד השרת האתר לGitHub:<br />  <a target="blank" href="https://github.com/ShaiMahnai/TDH201-server">https://github.com/ShaiMahnai/TDH201-server</a>.<br />
                {/* כמו כן, העלנו את השרת כ-API נגיש לציבור, בכדי שניתן יהיה לגשת ישירות ל-Data, ללא נגיעה בקוד. <br /> */}
                <p>יש לציין שהמידע באתר העירייה מתעדכן על בסיס קבוע. לכן היה לנו חשוב לפרסם את קוד השרת ולאפשר הפעלה שלו, כך שהרצה שלו תביא את הנתונים העדכניים ביותר.</p>
                היה לנו חשוב לשמור על מידע רב ככל הניתן ממאגר המידע המקורי של העירייה, כדי שאם יהיה רצון להשתמש במידע אחר מהמידע, יהיה ניתן לעשות זאת.</p>
            <p> <u><b>גישה למידע:</b></u><br />
                את מאגר המידע אותו יצרנו ניתן להוריד כקובץ JSON
               ע"י לחיצה <a href="https://api.myjson.com/bins/f60p8" target="blank">כאן</a>.<br />
                מבנה הנתונים בקובץ זה מציג את כל הרחובות המוצגים באתר עם מידע עליהם:
                <ul>
                    <li>Name - שם הרחוב</li>
                    <li>Neighborhood - שכונה</li>
                    <li>DateOfApprovementMeeting - תאריך אישור בוועדות העירייה</li>
                    <li>Decade -  עשור  אישור בוועדות העירייה</li>
                    <li>IsNamedAfterWoman - האם קרוי על שם אישה</li>
                    <li>Exist - האם קיים בפועל</li>
                    <li>Coordinates - רשימת קוארדינטות הרחוב (בצורת lat-lng)</li>


                </ul>

            </p>

            <u>צד לקוח</u>
            <p> במסגרת עבודה על צד הלקוח, הקמנו פרוייקט React, שמציג את עבודתנו על גבי מפה בצורה אינטראקטיבית. הפרוייקט מציג מפה של google maps, עליה ניתן להציג את רחובות העיר לפי בחירות שונות: שכונה, העשור שבו אישרה ועדת העירייה את הקמת הרחוב, האם הרחוב על שם אישה והאם הרחוב בתכנון בלבד.</p>
            <p>כמו כן, חיברנו את הרחובות לערכים שלהם מתוך אתר ויקיפדיה, כך שלחיצה על הרחוב בתוך המפה תוביל לערך המתאים.</p>
            <p>בנוסף, ניתן לראות באתר רשימה של כל רחובות העיר עפ"י הבחירה שנעשתה (רחובות המוצגים באתר – מתוך מאגר העירייה), וכן  על ידי לחיצה לצפות ברחוב מודגש מבין כל שאר הרחובות שנבחרו.</p>
            <p> כשירות לציבור, העלנו את קוד צד הלקוח לאתר לGitHub:<br />  <a target="blank" href="https://github.com/ShaiMahnai/TDH201-client">https://github.com/ShaiMahnai/TDH201-client</a>.<br /></p>
            <p>
                נשמח לקבל הערות, הארות ולענות על כל שאלה:<br />
                mahnai@post.bgu.ac.il<br />
                amirschw@gmail.com
            </p>

        </div>



    }
}
export default About;