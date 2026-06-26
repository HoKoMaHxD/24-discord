// الحالات المتاحة: "online", "idle", "dnd", "invisible", "offline"

export default [
    {
        // ================= إعدادات التوجيه =================
        serverId: "766953289409232896",   // أيدي السيرفر
        channelId: "1520039599290974248",  // أيدي الروم الصوتي
        token: process.env.token1,         // جلب التوكن من الـ Environment Variables
        
        // ================= إعدادات الصوت والحالة =================
        selfMute: true,                    // إغلاق المايكروفون
        selfDeaf: true,                   // السماح بسماع الصوت في الروم
        presence: {
            status: "idle",                // حالة الحساب
        },
        
        // ================= إعدادات الاتصال =================
        autoReconnect: {
            enabled: true,                 // تفعيل إعادة الاتصال التلقائي
            delay: 1,                      // مدة الانتظار (بالثواني) قبل المحاولة
            maxRetries: 500,                 // أقصى عدد لمحاولات إعادة الاتصال
        },
    },
    
    /* // يمكنك فك التعليق عن هذا الجزء لإضافة حساب ثاني يعمل في نفس الوقت
    {
        serverId: "أيدي_السيرفر_هنا",
        channelId: "أيدي_الروم_هنا",
        token: process.env.token2,         // لا تنسَ إضافة token2 في بيئة العمل
        selfMute: true,
        selfDeaf: true,
        presence: { status: "dnd" },
        autoReconnect: { enabled: true, delay: 5, maxRetries: 5 },
    }
    */
];
