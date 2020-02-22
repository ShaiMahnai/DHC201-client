import React, { Component } from 'react';

export class About extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div className="about" >
            <p>הפרוייקט נבנה כחלק מקורס "מדעי הרוח הדיגיטליים" במסגרת התואר הראשון במדעי המחשב באוניברסיטת בן גוריון, באר שבע: <a href="https://www.cs.bgu.ac.il/~tdh201/Main">https://www.cs.bgu.ac.il/~tdh201/Main</a>, בהנחיית ד"ר יעל נצר.</p>

            <u>צד שרת</u>
            <p>במסגרת העבודה על צד השרת הקמנו פרוייקט .net Core בשפת C#.</p>
            <p>פעלנו מול OpenData API של עיריית  באר שבע בכתובת: <a href="https://www.beer-sheva.muni.il/OpenData/Pages/Data.aspx">https://www.beer-sheva.muni.il/OpenData/Pages/Data.aspx</a> </p>
            <p>פנינו למאגרים שונים ב-API הזה, ביניהם:
            מספרי בתים ושמות הרחובות, שמות הרחובות בעיר ועוד.  השתמשנו בשדות כמו: מתי אושר הרחוב בוועדות העירייה, באיזה שכונה הרחוב או האם הרחוב קרוי על שם אישה, בשביל להציג מידע שחשבנו שיעניין את צופי הפרויקט, וכן עניין אותנו בתור תושבי העיר.</p>
            <p>גילינו שקיים במאגר עוד מידע רב שניתן להשתמש בו ולהציגו, כמו מגרשי משחקים בעיר, גינות כלבים, תחנות דלקים וכו'. שמחנו שבנינו את הבסיס בשביל שאנשים נוספים יוכלו להשתמש במה שכבר יצרנו ולהרחיב את הפרויקט בקלות, ע"י גישה למאגר הרצוי באתר העירייה והוספה שלו לפרויקט הקיים.</p>

            <p>המידע שהגיע מהמאגר של עיריית באר שבע היה בצורה של קואורדינטות  GPS, ולכן היה עלינו לעבד את המידע בכדי שנוכל להציג אותו על מפה באתר שלנו.  לצורך כך השתמשנו בOpenStreetMap  וכן בgoogleapis של Google maps. </p>

            <p>מצאנו את המידע בOpenStreetMap  כנכון ויעיל יותר (מחזיר רצף קואורדינטות של רחוב ולא מספר נקודות / נקודה בודדת), ולכן העדפנו לפנות אליו קודם, ורק לא נמצא שם הרחוב במאגר זה, פנינו לAPI של Google.</p>
            <p> כשירות לציבור, העלנו את קוד השרת לאתר לGitHub:<br />  <a href="https://github.com/ShaiMahnai/TDH201-server">https://github.com/ShaiMahnai/TDH201-server</a>.<br />
                כמו כן, העלנו את הפרויקט כ-API, בשביל שניתן יהיה לגשת ישירות ל-Data, ללא נגיעה בקוד.</p>
            <p> <u><b>לצורך גישה למידע המעובד:</b></u><br />
                הוצאת קריאת Get</p>

            <u>צד לקוח</u>
            <p> במסגרת עבודה על צד הלקוח, הקמנו פרוייקט React, שמציג את עבודתנו על גבי מפה בצורה אינטראקטיבית. הפרוייקט מציג מפה של google maps, עליה ניתן להציג את רחובות העיר לפי בחירות שונות: שכונה, העשור שבו אישרה ועדת העירייה את הקמת הרחוב, האם הרחוב על שם אישה.</p>
            <p>כמו כן, חיברנו את הרחובות לערכים שלהם מתוך אתר ויקיפדיה, כך שלחיצה על הרחוב בתוך המפה תוביל לערך המתאים.</p>
            <p>בנוסף, ניתן לראות באתר רשימה של כל רחובות העיר עפ"י הבחירה שנעשתה (רחובות המוצגים באתר – מתוך מאגר העירייה), וכן  על ידי לחיצה לצפות ברחוב מודגש מבין כל שאר הרחובות שנבחרו.</p>
            <p> כשירות לציבור, העלנו את קוד צד הלקוח לאתר לGitHub:<br />  <a href="https://github.com/ShaiMahnai/TDH201-client">https://github.com/ShaiMahnai/TDH201-client></a>.<br /></p>
            <p>
                נשמח לקבל הערות, הארות ולענות על כל שאלה:<br />
                mahnai@post.bgu.ac.il<br />
                amirschw@gmail.com
            </p>

        </div>



    }
}
export default About;