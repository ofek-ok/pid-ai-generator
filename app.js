/* ==========================================================================
   PID AI Generator - Client-Side JavaScript Logic
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Localization & Translation Dictionary
// --------------------------------------------------------------------------
const translations = {
    he: {
        // Nav & Header
        nav_features: "תכונות",
        nav_how_it_works: "איך זה עובד?",
        nav_security: "אבטחה ופרטיות",
        nav_settings: "הגדרות API",
        nav_launch: "כניסה למערכת",
        
        // Hero
        hero_pill: "<i class='fa-solid fa-star'></i> כלי ה-AI המוביל למנהלי פרויקטים ו-PMO",
        hero_desc: "הזן את נתוני הבסיס של הפרויקט שלך, ותן ל-AI של Gemini להרחיב, לעבות ולייצר עבורך מסמך ייזום (Sections 1–12) שלם, מקצועי ומנוסח היטב בהתאם לסטנדרטים המובילים.",
        hero_cta_start: "התחל עכשיו בחינם",
        hero_cta_demo: "צפה בהדגמה מהירה",
        hero_ben_1: "ללא הרשמה",
        hero_ben_2: "תמיכה מלאה בעברית ובאנגלית",
        hero_ben_3: "ייצוא ישיר ל-Word ול-PDF",
        
        // Features
        feat_title: "למה להשתמש ב-PID AI Generator?",
        feat_subtitle: "פתרון שלם המיועד למנהלי פרויקטים שמחפשים יעילות, דיוק ומקצועיות ללא פשרות.",
        feat_ai_title: "הרחבת AI מתקדמת",
        feat_ai_desc: "הזן רק 5 סעיפים בסיסיים, ומודל ה-AI החכם ישלים, ינסח ויעבה את שאר 12 הסעיפים כולל הערכת סיכונים, מטריצת אחריות (RACI), לוחות זמנים מוערכים ומדדי הצלחה.",
        feat_sec_title: "אבטחה מלאה ואירוח מקומי",
        feat_sec_desc: "הנתונים שלך והמפתחות שלך נשמרים בדפדפן האישי שלך בלבד (Local Storage). שום מידע עסקי רגיש לא נשמר בשרת חיצוני או נמכר הלאה.",
        feat_exp_title: "ייצוא מושלם ל-Word ו-PDF",
        feat_exp_desc: "הורד את הקובץ כמסמך HTML עצמאי שנפתח ישירות ב-Word עם עיצוב וטבלאות מושלמים, או הדפס ישירות ל-PDF דרך הדפדפן בעימוד עסקי אלגנטי.",
        feat_lang_title: "דו-לשוני מלא",
        feat_lang_desc: "תומך בכתיבה, ממשק ומסמכים סופיים בעברית או באנגלית, כולל התאמה אוטומטית של כיוון הטקסט (RTL/LTR) ומילון מונחי PMO מקצועי.",
        feat_hist_title: "שמירה אוטומטית והיסטוריה",
        feat_hist_desc: "העבודה שלך אף פעם לא תלך לאיבוד. האפליקציה שומרת את הטיוטות באופן אוטומטי ומאפשרת לך לחזור ולערוך מסמכים ישנים בכל עת.",
        feat_edit_title: "עורך Markdown מובנה",
        feat_edit_desc: "לאחר יצירת המסמך על ידי ה-AI, תוכל לערוך אותו בזמן אמת במסך מפוצל – ערוך קוד Markdown משמאל וראה את התצוגה המעוצבת מימין באופן מיידי.",
        
        // How it works
        how_title: "איך זה עובד? ב-4 שלבים פשוטים",
        how_s1_title: "מגדירים מפתח API",
        how_s1_desc: "מזינים מפתח Gemini API פעם אחת בהגדרות המאובטחות (או בוחרים במצב הדגמה כדי להתנסות).",
        how_s2_title: "עונים על השאלון",
        how_s2_desc: "ממלאים אשף ידידותי וממוקד של 5 שלבים (פרטי פרויקט, רקע, מטרות, תכולות ומשאבים מוערכים).",
        how_s3_title: "ה-AI מייצר ומעבה",
        how_s3_desc: "ה-AI מקבל את הקלט, מנסח אותו בצורה מקצועית ומשלים את 7 הסעיפים הנותרים של מסמך ה-Initiation.",
        how_s4_title: "עורכים ומייצאים",
        how_s4_desc: "עוברים על המסמך, מבצעים תיקונים בעורך החי ומייצאים לקובץ Word מעוצב או ל-PDF מוכן לחתימות.",
        
        // Security Section
        sec_title: "<i class='fa-solid fa-lock security-lock-icon'></i> אבטחת מידע ופרטיות מעל הכל",
        sec_desc_1: "במשרדי PMO ופרויקטים ארגוניים, סודיות המידע היא קריטית. מסיבה זו, האפליקציה פועלת באופן עצמאי לחלוטין בצד הלקוח (Client-Side Only).",
        sec_desc_2: "מפתח ה-API שלך וכל הטיוטות והנתונים שאתה מזין נשמרים ישירות בזיכרון המקומי של הדפדפן שלך. הנתונים נשלחים אך ורק ישירות לשרתי ה-API הרשמיים של Google Gemini לשם עיבוד בלבד, ולא נרשמים באף בסיס נתונים אחר.",
        
        // Footer
        footer_rights: "© 2026 PID AI Generator. כל הזכויות שמורות למנהלי פרויקטים יעילים.",
        
        // Dashboard Panel
        dash_title: "לוח הבקרה שלי",
        dash_new_btn: "מסמך ייזום חדש",
        dash_stat_drafts: "טיוטות פתוחות",
        dash_stat_completed: "מסמכים מוכנים",
        dash_stat_key: "מצב מפתח API",
        dash_stat_key_missing: "חסר מפתח",
        dash_history_title: "מסמכים אחרונים",
        dash_history_empty: "עדיין לא יצרת אף מסמך ייזום פרויקט. לחץ על כפתור 'מסמך ייזום חדש' כדי להתחיל!",
        
        // History Table Headers
        table_project_name: "שם הפרויקט",
        table_date: "תאריך עדכון",
        table_priority: "עדיפות",
        table_status: "סטטוס",
        
        // Wizard Steps Nav
        wstep_1: "פרטי פרויקט",
        wstep_2: "רקע ומצב קיים",
        wstep_3: "מטרות ותרומה",
        wstep_4: "תכולות",
        wstep_5: "הערכת משאבים",
        
        // Step 1 Form
        s1_title: "1. פרטי הפרויקט הכלליים",
        s1_desc: "הזן את פרטי הזיהוי הבסיסיים של הפרויקט. נתונים אלו יופיעו בראש מסמך הייזום.",
        s1_lbl_name: "שם הפרויקט",
        s1_hlp_name: "שם קצר, ברור וממוקד לפרויקט.",
        s1_lbl_date: "תאריך ייזום",
        s1_lbl_owner: "Owner עסקי (מוביל עסקי)",
        s1_lbl_pm: "מנהל הפרויקט",
        s1_lbl_domain: "תחום פרויקט",
        s1_lbl_priority: "רמת עדיפות מבוקשת",
        opt_high: "גבוהה",
        opt_critical: "קריטית",
        opt_medium: "בינונית",
        opt_low: "נמוכה",
        
        // Step 2 Form
        s2_title: "2. רקע ומצב קיים",
        s2_desc: "תאר את המציאות הנוכחית שמתוכה נולד הפרויקט. ה-AI ישתמש בזה כדי לנתח פערים ולהציע פתרונות.",
        s2_lbl_state: "2.1 תיאור מצב נוכחי",
        s2_lbl_audiences: "2.2 אוכלוסיות מושפעות",
        s2_lbl_workflows: "2.3 תהליכי עבודה קיימים",
        s2_lbl_pains: "2.4 תיאור כאבים עסקיים עיקריים",
        s2_lbl_volumes: "2.5 נפחי אירועים/פניות (אופציונלי)",
        
        // Step 3 Form
        s3_title: "3. מטרות עסקיות ותרומה",
        s3_desc: "נגדיר מה הפרויקט מנסה להשיג ולאן אנו שואפים להגיע.",
        s3_builder_title: "3.1 בונה 'משפט הקיום' של הפרויקט",
        s3_builder_desc: "השלם את המילים בתיבות כדי ליצור משפט קיום מדויק עבור ה-AI:",
        s3_b_1: "משנים את",
        s3_b_2: "ל־",
        s3_b_3: "עבור",
        s3_b_4: "באמצעות",
        s3_b_5: "כדי להשיג",
        s3_lbl_goals: "3.2 הגדרת מטרות עסקיות",
        s3_lbl_benefits: "3.3 תרומה עסקית וצפי תועלת",
        s3_lbl_deadline: "3.4 דדליין עסקי / רגולטורי",
        s3_lbl_just: "3.5 הצדקת הפרויקט (למה עכשיו?)",
        
        // Step 4 Form
        s4_title: "4. תכולת הפרויקט (Scope)",
        s4_desc: "הגדר במדויק מה יהיה כלול בפרויקט ומה יוחרג ממנו באופן מכוון כדי למנוע זליגת תכולה.",
        s4_in_title: "כלול בפרויקט (IN SCOPE)",
        s4_out_title: "מחוץ לתכולה (OUT OF SCOPE)",
        
        // Step 5 Form
        s5_title: "5. הערכת משאבים",
        s5_desc: "הזן את הערכות המשאבים הראשוניות שלך. ה-AI ישתמש בהן כדי לבנות מטריצת RACI, להמליץ על מחזיקי עניין ולחשב תרחישים.",
        s5_sub_1: "5.1 כוח אדם פנימי - בתוך הצוות (הערכת שעות)",
        s5_sub_2: "5.2 כוח אדם פנימי - מחוץ לצוות (הערכת שעות)",
        s5_sub_3: "5.3 ספקים חיצוניים ורישיונות (עלויות מוערכות)",
        s5_lbl_pm_hrs: "מנהל פרויקט (שעות)",
        s5_lbl_analyst_hrs: "מנתח מערכות (שעות)",
        s5_lbl_qa_hrs: "בודקים / QA (שעות)",
        s5_lbl_dev_hrs: "צוותי פיתוח חיצוניים לצוות (שעות)",
        s5_lbl_infra_hrs: "תשתיות ותקשורת (שעות)",
        s5_lbl_ext_cost: "עלויות רכש, רישוי וספקים חיצוניים",
        
        // Wizard Actions Buttons
        wiz_btn_prev: "הקודם",
        wiz_btn_cancel: "ביטול וחזרה",
        wiz_btn_next: "הבא",
        wiz_btn_generate: "צור מסמך ייזום פרויקט",
        wiz_btn_save_draft: "שמור טיוטה וצא",
        
        // Processing Panel
        proc_title: "ה-AI יוצר את מסמך הייזום שלך...",
        proc_subtitle: "אנחנו מנסחים את הקלטים שלך, מעריכים סיכונים, מתכננים לוחות זמנים ומפרטים Stakeholders.",
        proc_s1: "מנתח ומעבד את נתוני הפרויקט...",
        proc_s2: "מנסח את סעיפי הרקע, המצב הקיים והמטרות מחדש...",
        proc_s3: "מחשב לוחות זמנים ומציע אבני דרך (סעיף 6)...",
        proc_s4: "מזהה בעלי עניין (Stakeholders) פנימיים וטכנולוגיים (סעיף 7)...",
        proc_s5: "מגבש קונספט פתרון ראשוני ואלטרנטיבות (סעיף 8)...",
        proc_s6: "ממפה סיכונים מובילים ומציע מטריצת RACI (סעיפים 9-10)...",
        proc_s7: "מגדיר מדדי הצלחה (KPIs) ואת טבלאות האישור (סעיפים 11-12)...",
        
        // Editor Panel
        edit_btn_wizard: "חזור לעריכת השאלון",
        edit_btn_copy: "העתק מסמך",
        edit_btn_word: "הורד ל-Word",
        edit_btn_pdf: "הדפס ל-PDF",
        pane_editor_title: "קוד מקור (Markdown)",
        pane_preview_title: "תצוגה מקדימה מעוצבת",
        pane_saved: "נשמר אוטומטית בדפדפן",
        
        // Settings Modal
        modal_settings_title: "הגדרות חיבור AI",
        modal_settings_desc: "כדי שהאפליקציה תוכל לעבוד מול ה-AI, עליך להזין מפתח API של Google Gemini. המפתח נשמר בדפדפן שלך בלבד ולא נשלח לאף שרת חיצוני.",
        modal_lbl_key: "Gemini API Key",
        modal_get_key: "קבל מפתח API בחינם מ-Google AI Studio",
        modal_lbl_model: "מודל AI מועדף",
        modal_status_warning: "לא הוגדר מפתח API. האפליקציה תפעל ב'מצב הדגמה' (Mock Mode) עם תוכן מוכן מראש.",
        modal_status_success: "מפתח API הוגדר בהצלחה בזיכרון המקומי!",
        modal_btn_clear: "מחק מפתח",
        modal_btn_save: "שמור הגדרות",
        
        // Alert Dialog Messages
        msg_key_saved: "ההגדרות נשמרו בהצלחה!",
        msg_key_cleared: "מפתח ה-API נמחק בהצלחה.",
        msg_fill_required: "אנא מלא את כל שדות החובה המסומנים בכוכבית (*)",
        msg_draft_saved: "טיוטה נשמרה בהצלחה!",
        msg_copied: "המסמך הועתק ללוח הגזירים!",
        msg_enter_api_key_prompt: "לא הוגדר מפתח API. אנא הגדר מפתח Gemini בהגדרות, או לחץ אישור להמשך במצב הדגמה (Mock Mode).",
        msg_confirm_delete: "האם אתה בטוח שברצונך למחוק את הטיוטה הזו?"
    },
    en: {
        // Nav & Header
        nav_features: "Features",
        nav_how_it_works: "How it works?",
        nav_security: "Security & Privacy",
        nav_settings: "API Settings",
        nav_launch: "Launch App",
        
        // Hero
        hero_pill: "<i class='fa-solid fa-star'></i> Leading AI Tool for PMs and PMOs",
        hero_desc: "Enter your core project variables, and let our Gemini-powered AI expand, enrich, and write a professional 12-section Project Initiation Document (PID) tailored to global standards.",
        hero_cta_start: "Get Started Free",
        hero_cta_demo: "Watch Quick Demo",
        hero_ben_1: "No Sign Up Required",
        hero_ben_2: "Full Hebrew & English Support",
        hero_ben_3: "Direct Export to Word & PDF",
        
        // Features
        feat_title: "Why use PID AI Generator?",
        feat_subtitle: "A complete solution tailored for project managers seeking efficiency, precision, and executive quality.",
        feat_ai_title: "Advanced AI Enrichment",
        feat_ai_desc: "Provide only 5 basic sections, and our smart AI model completes and drafts the remaining sections including risks, RACI, timeline milestones, and success KPIs.",
        feat_sec_title: "Fully Local & Secure",
        feat_sec_desc: "Your data and API keys stay entirely in your personal browser's local storage. No sensitive business information is ever saved on third-party servers.",
        feat_exp_title: "Perfect Export to Word & PDF",
        feat_exp_desc: "Download as a standalone HTML file that opens perfectly in Microsoft Word, maintaining style and tables, or print directly to PDF in executive layout.",
        feat_lang_title: "Fully Bilingual",
        feat_lang_desc: "Supports inputs, interface language, and final document output in either Hebrew or English, with automatic text direction (RTL/LTR) adjustment.",
        feat_hist_title: "Auto-save & History",
        feat_hist_desc: "Never lose your work. The app automatically saves drafts locally, allowing you to return and edit your initiation documents at any point.",
        feat_edit_title: "Live Markdown Editor",
        feat_edit_desc: "After generating the PID, edit it instantly in a split-screen workspace – modify Markdown code on the left and see the styled layout on the right.",
        
        // How it works
        how_title: "How does it work? In 4 Simple Steps",
        how_s1_title: "Configure API Key",
        how_s1_desc: "Add your Gemini API Key in the settings panel (or choose mock mode to experiment).",
        how_s2_title: "Fill Questionnaire",
        how_s2_desc: "Complete a focused 5-step wizard covering details, background, goals, scope, and resources.",
        how_s3_title: "AI Generates & Enriches",
        how_s3_desc: "AI processes inputs, drafts professional terminology, and fills in sections 6 to 12.",
        how_s4_title: "Edit and Export",
        how_s4_desc: "Review your document, perform adjustments in the live editor, and export to Word or PDF.",
        
        // Security Section
        sec_title: "<i class='fa-solid fa-lock security-lock-icon'></i> Information Security Above All",
        sec_desc_1: "In PMO offices and corporate environments, information security is critical. Therefore, this tool is 100% serverless, running solely in your browser.",
        sec_desc_2: "Your API key and all data inputs remain in your browser's local storage. They are sent directly to the official Google Gemini API endpoint for processing, never stored elsewhere.",
        
        // Footer
        footer_rights: "© 2026 PID AI Generator. All rights reserved to efficient Project Managers.",
        
        // Dashboard Panel
        dash_title: "My Dashboard",
        dash_new_btn: "New PID Document",
        dash_stat_drafts: "Open Drafts",
        dash_stat_completed: "Completed PIDs",
        dash_stat_key: "API Key Status",
        dash_stat_key_missing: "Key Missing",
        dash_history_title: "Recent Documents",
        dash_history_empty: "You haven't created any Project Initiation Documents yet. Click 'New PID Document' to begin!",
        
        // History Table Headers
        table_project_name: "Project Name",
        table_date: "Updated Date",
        table_priority: "Priority",
        table_status: "Status",
        
        // Wizard Steps Nav
        wstep_1: "Project Details",
        wstep_2: "Background & State",
        wstep_3: "Goals & Value",
        wstep_4: "Scope",
        wstep_5: "Resources",
        
        // Step 1 Form
        s1_title: "1. General Project Details",
        s1_desc: "Enter identification details for the project. These appear in the document header.",
        s1_lbl_name: "Project Name",
        s1_hlp_name: "Short, clear, and focused project title.",
        s1_lbl_date: "Initiation Date",
        s1_lbl_owner: "Business Owner",
        s1_lbl_pm: "Project Manager",
        s1_lbl_domain: "Project Domain",
        s1_lbl_priority: "Requested Priority",
        opt_high: "High",
        opt_critical: "Critical",
        opt_medium: "Medium",
        opt_low: "Low",
        
        // Step 2 Form
        s2_title: "2. Background & Current State",
        s2_desc: "Describe the current situation. AI uses this to identify gaps and shape solutions.",
        s2_lbl_state: "2.1 Current State Description",
        s2_lbl_audiences: "2.2 Affected Audiences",
        s2_lbl_workflows: "2.3 Existing Workflows",
        s2_lbl_pains: "2.4 Key Business Pain Points",
        s2_lbl_volumes: "2.5 Inquiry/Event Volumes (Optional)",
        
        // Step 3 Form
        s3_title: "3. Business Goals & Value",
        s3_desc: "Define what the project aims to accomplish and its core rationale.",
        s3_builder_title: "3.1 Project 'Reason for Being' Sentence Builder",
        s3_builder_desc: "Fill in the blank boxes to formulate a clear statement for the AI:",
        s3_b_1: "We are changing",
        s3_b_2: "to",
        s3_b_3: "for",
        s3_b_4: "via",
        s3_b_5: "to achieve",
        s3_lbl_goals: "3.2 Business Goals",
        s3_lbl_benefits: "3.3 Business Benefits & ROI",
        s3_lbl_deadline: "3.4 Business / Regulatory Deadline",
        s3_lbl_just: "3.5 Project Justification (Why now?)",
        
        // Step 4 Form
        s4_title: "4. Project Scope",
        s4_desc: "Clearly map out what is in scope and what is explicitly out of scope to prevent scope creep.",
        s4_in_title: "IN SCOPE",
        s4_out_title: "OUT OF SCOPE",
        
        // Step 5 Form
        s5_title: "5. Resource Estimation",
        s5_desc: "Enter initial resource estimates. AI will use this to compile a RACI chart and recommend stakeholder processes.",
        s5_sub_1: "5.1 Internal Team HR (Hours)",
        s5_sub_2: "5.2 External Internal HR (Hours)",
        s5_sub_3: "5.3 External Suppliers & Licences (Cost Estimate)",
        s5_lbl_pm_hrs: "Project Manager (Hours)",
        s5_lbl_analyst_hrs: "System Analyst (Hours)",
        s5_lbl_qa_hrs: "QA / Testers (Hours)",
        s5_lbl_dev_hrs: "External Dev Teams (Hours)",
        s5_lbl_infra_hrs: "Infra & Comm (Hours)",
        s5_lbl_ext_cost: "Purchasing, Licensing & Suppliers Cost",
        
        // Wizard Actions Buttons
        wiz_btn_prev: "Back",
        wiz_btn_cancel: "Cancel",
        wiz_btn_next: "Next",
        wiz_btn_generate: "Generate PID Document",
        wiz_btn_save_draft: "Save & Exit",
        
        // Processing Panel
        proc_title: "AI is creating your PID document...",
        proc_subtitle: "Synthesizing inputs, formulating risk profiles, designing RACI and scheduling milestones.",
        proc_s1: "Analyzing project raw inputs...",
        proc_s2: "Re-drafting background, current state, and goals...",
        proc_s3: "Scheduling target timelines and milestones (Sec 6)...",
        proc_s4: "Mapping internal & external Stakeholders (Sec 7)...",
        proc_s5: "Drafting initial solution concept & alternatives (Sec 8)...",
        proc_s6: "Formulating risk matrix & RACI assignments (Sec 9-10)...",
        proc_s7: "Structuring KPI indexes & approval sheets (Sec 11-12)...",
        
        // Editor Panel
        edit_btn_wizard: "Edit Form Questionnaire",
        edit_btn_copy: "Copy Document",
        edit_btn_word: "Download for Word",
        edit_btn_pdf: "Print to PDF",
        pane_editor_title: "Source Code (Markdown)",
        pane_preview_title: "Formatted Preview",
        pane_saved: "Auto-saved in browser",
        
        // Settings Modal
        modal_settings_title: "AI Connection Settings",
        modal_settings_desc: "To connect this application with Gemini AI, input your Google Gemini API Key. It is saved purely in your local browser storage.",
        modal_lbl_key: "Gemini API Key",
        modal_get_key: "Get a free API Key from Google AI Studio",
        modal_lbl_model: "Preferred AI Model",
        modal_status_warning: "No API key configured. The application will run in Demo Mode (Mock Mode) using predefined mock templates.",
        modal_status_success: "API Key configured successfully in local storage!",
        modal_btn_clear: "Delete Key",
        modal_btn_save: "Save Settings",
        
        // Alert Dialog Messages
        msg_key_saved: "Settings saved successfully!",
        msg_key_cleared: "API key deleted successfully.",
        msg_fill_required: "Please fill all required fields marked with an asterisk (*)",
        msg_draft_saved: "Draft saved successfully!",
        msg_copied: "Document copied to clipboard!",
        msg_enter_api_key_prompt: "No API Key configured. Please enter a Gemini API Key in Settings, or click OK to proceed in Mock Demo Mode.",
        msg_confirm_delete: "Are you sure you want to delete this draft?"
    }
};

// --------------------------------------------------------------------------
// 2. Application State Definition
// --------------------------------------------------------------------------
const state = {
    lang: localStorage.getItem("pid_lang") || "he",
    theme: localStorage.getItem("pid_theme") || "light",
    activePanel: "dashboard", // "dashboard", "wizard", "processing", "editor"
    currentStep: 1,
    inScopeItems: [],
    outScopeItems: [],
    drafts: [],
    currentDraftId: null,
    apiKey: "",
    aiModel: "gemini-2.5-flash"
};

// --------------------------------------------------------------------------
// 3. UI Selectors
// --------------------------------------------------------------------------
const selectors = {
    body: document.body,
    btnHome: document.getElementById("btn-home"),
    btnToggleLang: document.getElementById("btn-toggle-lang"),
    btnToggleTheme: document.getElementById("btn-toggle-theme"),
    btnSettingsTrigger: document.getElementById("btn-settings-trigger"),
    
    // Panels
    panelDashboard: document.getElementById("panel-dashboard"),
    panelWizard: document.getElementById("panel-wizard"),
    panelProcessing: document.getElementById("panel-processing"),
    panelEditor: document.getElementById("panel-editor"),
    
    // Modals
    modalSettings: document.getElementById("modal-settings"),
    btnSettingsClose: document.getElementById("btn-settings-close"),
    
    // Settings actions
    inputApiKey: document.getElementById("setting-api-key"),
    selectModel: document.getElementById("setting-model-select"),
    btnToggleKeyVis: document.getElementById("btn-toggle-key-visibility"),
    btnSettingsSave: document.getElementById("btn-settings-save"),
    btnSettingsClear: document.getElementById("btn-settings-clear"),
    apiWarning: document.getElementById("setting-api-status-warning"),
    apiSuccess: document.getElementById("setting-api-status-success"),
    
    // Dashboard Panel
    btnNewPid: document.getElementById("btn-new-pid"),
    statDrafts: document.getElementById("stat-count-drafts"),
    statCompleted: document.getElementById("stat-count-completed"),
    statApiStatus: document.getElementById("stat-api-status"),
    historyEmpty: document.getElementById("history-empty-state"),
    historyTable: document.getElementById("history-table-element"),
    historyBody: document.getElementById("history-table-body"),
    
    // Wizard
    trackerSteps: document.querySelectorAll(".tracker-step"),
    stepForms: document.querySelectorAll(".wizard-step-form"),
    btnWizBack: document.getElementById("btn-wizard-back"),
    btnWizNext: document.getElementById("btn-wizard-next"),
    btnWizCancel: document.getElementById("btn-wizard-cancel"),
    
    // List builders (Scope)
    listInScopeContainer: document.querySelector("#list-in-scope .list-items-container"),
    listOutScopeContainer: document.querySelector("#list-out-scope .list-items-container"),
    inputAddInScope: document.getElementById("input-add-in-scope"),
    inputAddOutScope: document.getElementById("input-add-out-scope"),
    btnAddInScope: document.getElementById("btn-add-in-scope"),
    btnAddOutScope: document.getElementById("btn-add-out-scope"),
    
    // Editor panel workspace
    editorTitle: document.getElementById("editor-project-title"),
    btnEditInputs: document.getElementById("btn-edit-inputs"),
    btnCopyDoc: document.getElementById("btn-copy-doc"),
    btnDownloadWord: document.getElementById("btn-download-word"),
    btnPrintPdf: document.getElementById("btn-print-pdf"),
    btnEditorBack: document.getElementById("btn-editor-back"),
    markdownInputBox: document.getElementById("markdown-input-box"),
    previewPaper: document.getElementById("rendered-document-paper"),
    
    // Loading progress
    progressBarFill: document.getElementById("loading-progress-bar-fill")
};

// --------------------------------------------------------------------------
// 4. Initializers & Setup
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    applyLanguageAndThemeInitialState();
    loadSettings();
    loadDrafts();
    updateUIStrings();
    setupEventListeners();
    refreshDashboard();
});

// Load persistent API configurations
function loadSettings() {
    state.apiKey = localStorage.getItem("pid_gemini_api_key") || "";
    state.aiModel = localStorage.getItem("pid_gemini_model") || "gemini-2.5-flash";
    
    if (selectors.inputApiKey) selectors.inputApiKey.value = state.apiKey;
    if (selectors.selectModel) selectors.selectModel.value = state.aiModel;
    
    updateAPIStatusBanners();
}

function applyLanguageAndThemeInitialState() {
    // Apply lang
    if (state.lang === "he") {
        selectors.body.dir = "rtl";
        selectors.body.classList.remove("lang-en");
        if (selectors.btnToggleLang) selectors.btnToggleLang.querySelector(".btn-text").textContent = "EN";
    } else {
        selectors.body.dir = "ltr";
        selectors.body.classList.add("lang-en");
        if (selectors.btnToggleLang) selectors.btnToggleLang.querySelector(".btn-text").textContent = "עב";
    }

    // Apply theme
    if (state.theme === "dark") {
        selectors.body.classList.remove("light-theme");
        selectors.body.classList.add("dark-theme");
        if (selectors.btnToggleTheme) selectors.btnToggleTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        selectors.body.classList.remove("dark-theme");
        selectors.body.classList.add("light-theme");
        if (selectors.btnToggleTheme) selectors.btnToggleTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
}

// Load drafts history
function loadDrafts() {
    const raw = localStorage.getItem("pid_drafts");
    state.drafts = raw ? JSON.parse(raw) : [];
}

// Save drafts history to storage
function saveDraftsToStorage() {
    localStorage.setItem("pid_drafts", JSON.stringify(state.drafts));
    refreshDashboard();
}

// Refresh statistics and data tables on dashboard
function refreshDashboard() {
    const openDrafts = state.drafts.filter(d => d.status === 'draft').length;
    const completedDocs = state.drafts.filter(d => d.status === 'completed').length;
    
    if (selectors.statDrafts) selectors.statDrafts.textContent = openDrafts;
    if (selectors.statCompleted) selectors.statCompleted.textContent = completedDocs;
    
    // Fill API key indicator status
    if (selectors.statApiStatus) {
        if (state.apiKey) {
            selectors.statApiStatus.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> <span style="color: var(--color-success)">${state.lang === 'he' ? 'מחובר' : 'Connected'}</span>`;
        } else {
            selectors.statApiStatus.innerHTML = `<i class="fa-solid fa-circle-exclamation text-warning"></i> <span style="color: var(--color-warning)">${state.lang === 'he' ? 'חסר מפתח' : 'Missing Key'}</span>`;
        }
    }
    
    // Render History table rows
    if (state.drafts.length === 0) {
        if (selectors.historyEmpty) selectors.historyEmpty.classList.remove("hidden");
        if (selectors.historyTable) selectors.historyTable.classList.add("hidden");
    } else {
        if (selectors.historyEmpty) selectors.historyEmpty.classList.add("hidden");
        if (selectors.historyTable) selectors.historyTable.classList.remove("hidden");
        
        if (selectors.historyBody) {
            selectors.historyBody.innerHTML = "";
            
            // Show newest drafts first
            const sortedDrafts = [...state.drafts].sort((a, b) => b.updatedAt - a.updatedAt);
            
            sortedDrafts.forEach(draft => {
                const tr = document.createElement("tr");
                const dateStr = new Date(draft.updatedAt).toLocaleDateString(state.lang === 'he' ? 'he-IL' : 'en-US', {
                    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                });
                
                const priorityClass = draft.priority === 'קריטית' || draft.priority === 'Critical' ? 'critical' :
                                      draft.priority === 'גבוהה' || draft.priority === 'High' ? 'high' :
                                      draft.priority === 'בינונית' || draft.priority === 'Medium' ? 'medium' : 'low';
                
                const statusClass = draft.status === 'completed' ? 'completed' : 'draft';
                const statusText = draft.status === 'completed' ? (state.lang === 'he' ? 'מוכן' : 'Completed') : (state.lang === 'he' ? 'טיוטה' : 'Draft');
                
                tr.innerHTML = `
                    <td style="font-weight: 600;">${escapeHtml(draft.projectName || 'Untitled Project')}</td>
                    <td>${dateStr}</td>
                    <td><span class="priority-tag ${priorityClass}">${draft.priority}</span></td>
                    <td><span class="status-tag ${statusClass}">${statusText}</span></td>
                    <td>
                        <div class="history-actions">
                            <button class="btn btn-outline btn-icon-only edit-draft-btn" data-id="${draft.id}" title="Edit Draft">
                                <i class="fa-solid fa-pencil"></i>
                            </button>
                            <button class="btn btn-outline btn-icon-only text-danger delete-draft-btn" data-id="${draft.id}" title="Delete Draft">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </td>
                `;
                selectors.historyBody.appendChild(tr);
            });
            
            // Attach action events dynamically
            document.querySelectorAll(".edit-draft-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = btn.getAttribute("data-id");
                    loadDraftIntoWizard(id);
                });
            });
            
            document.querySelectorAll(".delete-draft-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = btn.getAttribute("data-id");
                    if (confirm(translations[state.lang].msg_confirm_delete)) {
                        deleteDraft(id);
                    }
                });
            });
        }
    }
}

// --------------------------------------------------------------------------
// 5. Event Listeners Setup
// --------------------------------------------------------------------------
function setupEventListeners() {
    // Top Nav buttons
    if (selectors.btnHome) {
        selectors.btnHome.addEventListener("click", () => {
            window.location.href = "index.html"; // Go to Landing Page
        });
    }
    if (selectors.btnToggleLang) selectors.btnToggleLang.addEventListener("click", toggleLanguage);
    if (selectors.btnToggleTheme) selectors.btnToggleTheme.addEventListener("click", toggleTheme);
    if (selectors.btnSettingsTrigger) selectors.btnSettingsTrigger.addEventListener("click", () => openModal("settings"));
    
    // Modal closes
    if (selectors.btnSettingsClose) selectors.btnSettingsClose.addEventListener("click", () => closeModal("settings"));
    
    // API Modal Save/Clear
    if (selectors.btnSettingsSave) selectors.btnSettingsSave.addEventListener("click", saveSettings);
    if (selectors.btnSettingsClear) selectors.btnSettingsClear.addEventListener("click", clearSettings);
    if (selectors.btnToggleKeyVis) selectors.btnToggleKeyVis.addEventListener("click", toggleApiKeyVisibility);
    
    // Dashboard panel
    if (selectors.btnNewPid) selectors.btnNewPid.addEventListener("click", startNewDocument);
    
    // Wizard Footer navigation
    if (selectors.btnWizBack) selectors.btnWizBack.addEventListener("click", prevStep);
    if (selectors.btnWizNext) selectors.btnWizNext.addEventListener("click", nextStep);
    if (selectors.btnWizCancel) selectors.btnWizCancel.addEventListener("click", () => navigateToPanel("dashboard"));
    const btnWizSaveDraft = document.getElementById("btn-wizard-save-draft");
    if (btnWizSaveDraft) {
        btnWizSaveDraft.addEventListener("click", () => {
            saveFormDraft();
            alert(translations[state.lang].msg_draft_saved);
            navigateToPanel("dashboard");
        });
    }
    
    // Dynamic List Builders (Scope)
    if (selectors.btnAddInScope) selectors.btnAddInScope.addEventListener("click", addInScopeItem);
    if (selectors.btnAddOutScope) selectors.btnAddOutScope.addEventListener("click", addOutScopeItem);
    if (selectors.inputAddInScope) {
        selectors.inputAddInScope.addEventListener("keypress", (e) => {
            if(e.key === 'Enter') { e.preventDefault(); addInScopeItem(); }
        });
    }
    if (selectors.inputAddOutScope) {
        selectors.inputAddOutScope.addEventListener("keypress", (e) => {
            if(e.key === 'Enter') { e.preventDefault(); addOutScopeItem(); }
        });
    }
    
    // Document Editor actions
    if (selectors.btnEditInputs) selectors.btnEditInputs.addEventListener("click", returnToWizardFromEditor);
    if (selectors.btnCopyDoc) selectors.btnCopyDoc.addEventListener("click", copyDocumentToClipboard);
    if (selectors.btnDownloadWord) selectors.btnDownloadWord.addEventListener("click", downloadWordDocument);
    if (selectors.btnPrintPdf) selectors.btnPrintPdf.addEventListener("click", printDocument);
    if (selectors.btnEditorBack) selectors.btnEditorBack.addEventListener("click", () => navigateToPanel("dashboard"));
    
    // Auto-compiling markdown in preview
    if (selectors.markdownInputBox) {
        selectors.markdownInputBox.addEventListener("input", (e) => {
            updateDocumentPreview(e.target.value);
            autoSaveCurrentMarkdown(e.target.value);
        });
    }
}

// --------------------------------------------------------------------------
// 6. Navigation Panel Controls
// --------------------------------------------------------------------------
function navigateToPanel(panel) {
    state.activePanel = panel;
    
    if (selectors.panelDashboard) selectors.panelDashboard.classList.add("hidden");
    if (selectors.panelWizard) selectors.panelWizard.classList.add("hidden");
    if (selectors.panelProcessing) selectors.panelProcessing.classList.add("hidden");
    if (selectors.panelEditor) selectors.panelEditor.classList.add("hidden");
    
    if (panel === "dashboard") {
        refreshDashboard();
        if (selectors.panelDashboard) selectors.panelDashboard.classList.remove("hidden");
    } else if (panel === "wizard") {
        if (selectors.panelWizard) selectors.panelWizard.classList.remove("hidden");
    } else if (panel === "processing") {
        if (selectors.panelProcessing) selectors.panelProcessing.classList.remove("hidden");
    } else if (panel === "editor") {
        if (selectors.panelEditor) selectors.panelEditor.classList.remove("hidden");
    }
}

// --------------------------------------------------------------------------
// 7. Modals Manager
// --------------------------------------------------------------------------
function openModal(modalName) {
    if (modalName === "settings" && selectors.modalSettings) {
        selectors.modalSettings.classList.add("active");
    }
}

function closeModal(modalName) {
    if (modalName === "settings" && selectors.modalSettings) {
        selectors.modalSettings.classList.remove("active");
        loadSettings(); // revert changes if unsaved
    }
}

function toggleApiKeyVisibility() {
    if (!selectors.inputApiKey) return;
    const isPw = selectors.inputApiKey.type === "password";
    selectors.inputApiKey.type = isPw ? "text" : "password";
    if (selectors.btnToggleKeyVis) {
        selectors.btnToggleKeyVis.innerHTML = isPw ? `<i class="fa-solid fa-eye-slash"></i>` : `<i class="fa-solid fa-eye"></i>`;
    }
}

function saveSettings() {
    if (!selectors.inputApiKey) return;
    const key = selectors.inputApiKey.value.trim();
    const model = selectors.selectModel.value;
    
    localStorage.setItem("pid_gemini_api_key", key);
    localStorage.setItem("pid_gemini_model", model);
    
    state.apiKey = key;
    state.aiModel = model;
    
    updateAPIStatusBanners();
    alert(translations[state.lang].msg_key_saved);
    closeModal("settings");
    refreshDashboard();
}

function clearSettings() {
    localStorage.removeItem("pid_gemini_api_key");
    if (selectors.inputApiKey) selectors.inputApiKey.value = "";
    state.apiKey = "";
    updateAPIStatusBanners();
    alert(translations[state.lang].msg_key_cleared);
}

function updateAPIStatusBanners() {
    if (state.apiKey) {
        if (selectors.apiSuccess) selectors.apiSuccess.classList.remove("hidden");
        if (selectors.apiWarning) selectors.apiWarning.classList.add("hidden");
    } else {
        if (selectors.apiSuccess) selectors.apiSuccess.classList.add("hidden");
        if (selectors.apiWarning) selectors.apiWarning.classList.remove("hidden");
    }
}

// --------------------------------------------------------------------------
// 8. Localization Engine
// --------------------------------------------------------------------------
function toggleLanguage() {
    state.lang = state.lang === "he" ? "en" : "he";
    localStorage.setItem("pid_lang", state.lang);
    
    // Update body tags and layout direction
    if (state.lang === "he") {
        selectors.body.dir = "rtl";
        selectors.body.classList.remove("lang-en");
        if (selectors.btnToggleLang) selectors.btnToggleLang.querySelector(".btn-text").textContent = "EN";
    } else {
        selectors.body.dir = "ltr";
        selectors.body.classList.add("lang-en");
        if (selectors.btnToggleLang) selectors.btnToggleLang.querySelector(".btn-text").textContent = "עב";
    }
    
    updateUIStrings();
    refreshDashboard();
}

// Traverse elements with data-i18n attributes and replace content
function updateUIStrings() {
    const dict = translations[state.lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    // Update placeholders
    updateFormPlaceholders();
}

function updateFormPlaceholders() {
    const isHe = state.lang === "he";
    
    if (selectors.inputAddInScope) selectors.inputAddInScope.placeholder = isHe ? "הוסף סעיף תכולה חדש..." : "Add new scope item...";
    if (selectors.inputAddOutScope) selectors.inputAddOutScope.placeholder = isHe ? "הוסף סעיף החרגה חדש..." : "Add new out-of-scope item...";
    
    const fields = [
        { id: "input-proj-name", placeholderHe: "לדוגמה: שדרוג מערכת הליבה הפיננסית", placeholderEn: "e.g., Core Financial Engine Modernization" },
        { id: "input-business-owner", placeholderHe: "שם, תפקיד, אגף (למשל: משה כהן, מוביל עסקי)", placeholderEn: "Name, role, department (e.g. John Doe, PMO Lead)" },
        { id: "input-project-manager", placeholderHe: "שם מנהל הפרויקט", placeholderEn: "Project manager name" },
        { id: "input-domain", placeholderHe: "לדוגמה: מערכות מידע, דיגיטל, רגולציה", placeholderEn: "e.g., IT Systems, Digital Channels, Compliance" },
        { id: "input-current-state", placeholderHe: "איך התהליך עובד היום בפועל? שלבים עיקריים, זרימה, אילו מערכות/דוחות משתמשים כיום...", placeholderEn: "Describe the current workflow, steps, systems, reports, and who performs what tasks..." },
        { id: "input-affected-audiences", placeholderHe: "אילו עובדים, צוותים, לקוחות או סוכנים מושפעים מהמצב הקיים?", placeholderEn: "Who is impacted? Internal teams, customer support, agents, external clients..." },
        { id: "input-existing-workflows", placeholderHe: "תיאור קצר ברמה גבוהה של התהליכים הרלוונטיים הנוכחיים", placeholderEn: "Brief high-level description of related processes" },
        { id: "input-pain-points", placeholderHe: "מה לא עובד טוב היום? אילו טעויות, עיכובים או חסמים נוצרים שמפריעים לעבודה?", placeholderEn: "What is broken? Explain delays, errors, manual overheads, blocks, bottlenecks..." },
        { id: "input-volumes", placeholderHe: "כמה פעמים הבעיה מתרחשת? כמה זמן/משאבים זה גוזל? הערכה כספית או סיכון.", placeholderEn: "How often does it occur? Time/resources lost? Est. financial impact/risk." },
        { id: "input-sentence-current", placeholderHe: "המצב הנוכחי/הקושי", placeholderEn: "current state/difficulty" },
        { id: "input-sentence-target", placeholderHe: "המצב הרצוי והפתרון", placeholderEn: "desired state/target" },
        { id: "input-sentence-who", placeholderHe: "קהל היעד / המשתמש", placeholderEn: "target users/audience" },
        { id: "input-sentence-how", placeholderHe: "דרך המימוש הטכנולוגית", placeholderEn: "how we solve it (tech)" },
        { id: "input-sentence-why", placeholderHe: "הערך המרכזי והלמה", placeholderEn: "core business benefit" },
        { id: "input-goals", placeholderHe: "מה רוצים להשיג? הגדר מטרות ברורות ומדידות במידת האפשר...", placeholderEn: "Define clear, SMART, and measurable goals..." },
        { id: "input-benefits", placeholderHe: "תיאור תועלת עסקית ישירה; צפי הכנסות, שיפור שירות, צמצום עלויות וכד'...", placeholderEn: "Expected ROI, cost savings, business growth, client satisfaction, operational speed..." },
        { id: "input-deadline", placeholderHe: "האם קיים תאריך יעד מחייב? מהן ההשלכות של אי עמידה ביעד?", placeholderEn: "Target date limits. What are the regulatory or competitive implications of delays?" },
        { id: "input-justification", placeholderHe: "למה זה מצדיק פרויקט נפרד (היקף, מערכות חוצות, רגולציה דחופה וכו')?", placeholderEn: "Why should this be handled as a separate project (scope, cross-department dependencies)?" },
        { id: "input-cost-external", placeholderHe: "לדוגמה: 50,000 ש״ח או $15,000", placeholderEn: "e.g., $15,000 or 50,000 ILS" }
    ];

    fields.forEach(f => {
        const el = document.getElementById(f.id);
        if (el) {
            el.placeholder = isHe ? f.placeholderHe : f.placeholderEn;
        }
    });
}

function toggleTheme() {
    state.theme = state.theme === "light" ? "dark" : "light";
    localStorage.setItem("pid_theme", state.theme);
    
    if (state.theme === "dark") {
        selectors.body.classList.remove("light-theme");
        selectors.body.classList.add("dark-theme");
        if (selectors.btnToggleTheme) selectors.btnToggleTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    } else {
        selectors.body.classList.remove("dark-theme");
        selectors.body.classList.add("light-theme");
        if (selectors.btnToggleTheme) selectors.btnToggleTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }
}

// --------------------------------------------------------------------------
// 9. Wizard Logic & Validation
// --------------------------------------------------------------------------
function startNewDocument() {
    // Reset state inputs
    state.currentDraftId = 'pid_' + Date.now();
    state.inScopeItems = [];
    state.outScopeItems = [];
    state.currentStep = 1;
    
    // Clear forms DOM
    const form = document.getElementById("pid-wizard-form");
    if (form) form.reset();
    if (selectors.listInScopeContainer) selectors.listInScopeContainer.innerHTML = "";
    if (selectors.listOutScopeContainer) selectors.listOutScopeContainer.innerHTML = "";
    
    // Initialize date with today's date
    const dateInput = document.getElementById("input-init-date");
    if (dateInput) {
        const today = new Date().toISOString().substring(0, 10);
        dateInput.value = today;
    }
    
    navigateToPanel("wizard");
    updateWizardStepDOM();
}

function updateWizardStepDOM() {
    // Update step visibility
    selectors.stepForms.forEach(form => {
        form.classList.remove("active");
        if (parseInt(form.getAttribute("data-step")) === state.currentStep) {
            form.classList.add("active");
        }
    });
    
    // Update progress tracker visual indicators
    selectors.trackerSteps.forEach(step => {
        const stepNum = parseInt(step.getAttribute("data-step"));
        step.classList.remove("active", "completed");
        if (stepNum === state.currentStep) {
            step.classList.add("active");
        } else if (stepNum < state.currentStep) {
            step.classList.add("completed");
        }
    });
    
    // Adjust footer action buttons
    const isHe = state.lang === "he";
    
    if (selectors.btnWizBack) {
        if (state.currentStep === 1) {
            selectors.btnWizBack.style.visibility = "hidden";
        } else {
            selectors.btnWizBack.style.visibility = "visible";
        }
    }
    
    if (selectors.btnWizNext) {
        if (state.currentStep === 5) {
            selectors.btnWizNext.innerHTML = `
                <span>${translations[state.lang].wiz_btn_generate}</span>
                <i class="fa-solid fa-wand-magic-sparkles"></i>
            `;
            selectors.btnWizNext.classList.add("btn-primary");
        } else {
            selectors.btnWizNext.innerHTML = `
                <span>${translations[state.lang].wiz_btn_next}</span>
                <i class="fa-solid fa-${isHe ? 'chevron-left' : 'chevron-right'} ${isHe ? 'icon-left' : 'icon-right'}"></i>
            `;
            selectors.btnWizNext.classList.remove("btn-primary");
        }
    }
}

function prevStep() {
    if (state.currentStep > 1) {
        state.currentStep--;
        updateWizardStepDOM();
    }
}

function nextStep() {
    // Validate current step before advancing
    if (!validateCurrentStep()) {
        alert(translations[state.lang].msg_fill_required);
        return;
    }
    
    if (state.currentStep < 5) {
        // Auto-save form progress as a draft in background
        saveFormDraft();
        state.currentStep++;
        updateWizardStepDOM();
    } else {
        // Trigger PID generation on step 5
        saveFormDraft();
        triggerPIDGeneration();
    }
}

// Local form validation checks
function validateCurrentStep() {
    const activeStepForm = document.querySelector(`.wizard-step-form[data-step="${state.currentStep}"]`);
    if (!activeStepForm) return true;
    
    const requiredInputs = activeStepForm.querySelectorAll("[required]");
    
    let isValid = true;
    requiredInputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add("input-error");
            
            // Remove error glow on input focus
            input.addEventListener("input", () => {
                input.classList.remove("input-error");
            }, { once: true });
        } else {
            input.classList.remove("input-error");
        }
    });
    return isValid;
}

// --------------------------------------------------------------------------
// 10. Dynamic List Builders (Scope Panels)
// --------------------------------------------------------------------------
function addInScopeItem() {
    if (!selectors.inputAddInScope) return;
    const val = selectors.inputAddInScope.value.trim();
    if (val) {
        state.inScopeItems.push(val);
        selectors.inputAddInScope.value = "";
        renderInScopeList();
        saveFormDraft();
    }
}

function addOutScopeItem() {
    if (!selectors.inputAddOutScope) return;
    const val = selectors.inputAddOutScope.value.trim();
    if (val) {
        state.outScopeItems.push(val);
        selectors.inputAddOutScope.value = "";
        renderOutScopeList();
        saveFormDraft();
    }
}

function renderInScopeList() {
    if (!selectors.listInScopeContainer) return;
    selectors.listInScopeContainer.innerHTML = "";
    state.inScopeItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "list-builder-item";
        div.innerHTML = `
            <span>${escapeHtml(item)}</span>
            <button type="button" class="btn-remove-item" onclick="removeInScopeItem(${index})">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        `;
        selectors.listInScopeContainer.appendChild(div);
    });
}

function renderOutScopeList() {
    if (!selectors.listOutScopeContainer) return;
    selectors.listOutScopeContainer.innerHTML = "";
    state.outScopeItems.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "list-builder-item";
        div.innerHTML = `
            <span>${escapeHtml(item)}</span>
            <button type="button" class="btn-remove-item" onclick="removeOutScopeItem(${index})">
                <i class="fa-solid fa-circle-xmark"></i>
            </button>
        `;
        selectors.listOutScopeContainer.appendChild(div);
    });
}

// Globally accessible functions for removal hooks
window.removeInScopeItem = function(index) {
    state.inScopeItems.splice(index, 1);
    renderInScopeList();
    saveFormDraft();
};

window.removeOutScopeItem = function(index) {
    state.outScopeItems.splice(index, 1);
    renderOutScopeList();
    saveFormDraft();
};

// --------------------------------------------------------------------------
// 11. Draft Auto-Saving & Local Storage Loader
// --------------------------------------------------------------------------
function getFormDataValue(id, defValue = "") {
    const el = document.getElementById(id);
    return el ? el.value.trim() : defValue;
}

function getFormDataObject() {
    return {
        id: state.currentDraftId,
        projectName: getFormDataValue("input-proj-name"),
        initiationDate: getFormDataValue("input-init-date"),
        businessOwner: getFormDataValue("input-business-owner"),
        projectManager: getFormDataValue("input-project-manager"),
        domain: getFormDataValue("input-domain"),
        priority: getFormDataValue("input-priority", "גבוהה"),
        
        currentState: getFormDataValue("input-current-state"),
        affectedAudiences: getFormDataValue("input-affected-audiences"),
        existingWorkflows: getFormDataValue("input-existing-workflows"),
        painPoints: getFormDataValue("input-pain-points"),
        volumes: getFormDataValue("input-volumes"),
        
        sentenceCurrent: getFormDataValue("input-sentence-current"),
        sentenceTarget: getFormDataValue("input-sentence-target"),
        sentenceWho: getFormDataValue("input-sentence-who"),
        sentenceHow: getFormDataValue("input-sentence-how"),
        sentenceWhy: getFormDataValue("input-sentence-why"),
        
        goals: getFormDataValue("input-goals"),
        benefits: getFormDataValue("input-benefits"),
        deadline: getFormDataValue("input-deadline"),
        justification: getFormDataValue("input-justification"),
        
        inScope: state.inScopeItems,
        outScope: state.outScopeItems,
        
        hoursPM: getFormDataValue("input-hours-pm", "80"),
        hoursAnalyst: getFormDataValue("input-hours-analyst", "60"),
        hoursQA: getFormDataValue("input-hours-qa", "50"),
        hoursDev: getFormDataValue("input-hours-dev", "200"),
        hoursInfra: getFormDataValue("input-hours-infra", "20"),
        costExternal: getFormDataValue("input-cost-external", "0"),
        
        markdown: selectors.markdownInputBox ? selectors.markdownInputBox.value : "",
        status: 'draft',
        currentStep: state.currentStep,
        updatedAt: Date.now()
    };
}

function saveFormDraft() {
    const data = getFormDataObject();
    
    // Check if draft already exists
    const idx = state.drafts.findIndex(d => d.id === state.currentDraftId);
    if (idx !== -1) {
        // Preserving markdown if already generated
        data.markdown = state.drafts[idx].markdown;
        data.status = state.drafts[idx].status;
        state.drafts[idx] = data;
    } else {
        state.drafts.push(data);
    }
    saveDraftsToStorage();
}

function setFormValue(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val;
}

function loadDraftIntoWizard(id) {
    const draft = state.drafts.find(d => d.id === id);
    if (!draft) return;
    
    state.currentDraftId = draft.id;
    state.inScopeItems = draft.inScope || [];
    state.outScopeItems = draft.outScope || [];
    
    // Populate form DOM elements
    setFormValue("input-proj-name", draft.projectName || "");
    setFormValue("input-init-date", draft.initiationDate || "");
    setFormValue("input-business-owner", draft.businessOwner || "");
    setFormValue("input-project-manager", draft.projectManager || "");
    setFormValue("input-domain", draft.domain || "");
    setFormValue("input-priority", draft.priority || "גבוהה");
    
    setFormValue("input-current-state", draft.currentState || "");
    setFormValue("input-affected-audiences", draft.affectedAudiences || "");
    setFormValue("input-existing-workflows", draft.existingWorkflows || "");
    setFormValue("input-pain-points", draft.painPoints || "");
    setFormValue("input-volumes", draft.volumes || "");
    
    setFormValue("input-sentence-current", draft.sentenceCurrent || "");
    setFormValue("input-sentence-target", draft.sentenceTarget || "");
    setFormValue("input-sentence-who", draft.sentenceWho || "");
    setFormValue("input-sentence-how", draft.sentenceHow || "");
    setFormValue("input-sentence-why", draft.sentenceWhy || "");
    
    setFormValue("input-goals", draft.goals || "");
    setFormValue("input-benefits", draft.benefits || "");
    setFormValue("input-deadline", draft.deadline || "");
    setFormValue("input-justification", draft.justification || "");
    
    setFormValue("input-hours-pm", draft.hoursPM || "80");
    setFormValue("input-hours-analyst", draft.hoursAnalyst || "60");
    setFormValue("input-hours-qa", draft.hoursQA || "50");
    setFormValue("input-hours-dev", draft.hoursDev || "200");
    setFormValue("input-hours-infra", draft.hoursInfra || "20");
    setFormValue("input-cost-external", draft.costExternal || "0");
    
    if (selectors.markdownInputBox) selectors.markdownInputBox.value = draft.markdown || "";
    
    renderInScopeList();
    renderOutScopeList();
    
    // Decide if going to wizard or directly to markdown editor workspace
    if (draft.status === 'completed' && draft.markdown) {
        if (selectors.editorTitle) selectors.editorTitle.textContent = draft.projectName;
        updateDocumentPreview(draft.markdown);
        navigateToPanel("editor");
    } else {
        state.currentStep = draft.currentStep || 1;
        navigateToPanel("wizard");
        updateWizardStepDOM();
    }
}

function deleteDraft(id) {
    state.drafts = state.drafts.filter(d => d.id !== id);
    saveDraftsToStorage();
}

function autoSaveCurrentMarkdown(mdText) {
    const idx = state.drafts.findIndex(d => d.id === state.currentDraftId);
    if (idx !== -1) {
        state.drafts[idx].markdown = mdText;
        state.drafts[idx].updatedAt = Date.now();
        state.drafts[idx].status = 'completed';
        saveDraftsToStorage();
        
        // Brief visual flash on "saved" text
        const indicator = document.getElementById("save-status-text");
        if (indicator) {
            indicator.style.opacity = 0.5;
            setTimeout(() => indicator.style.opacity = 1, 300);
        }
    }
}

function returnToWizardFromEditor() {
    state.currentStep = 5;
    navigateToPanel("wizard");
    updateWizardStepDOM();
}

// --------------------------------------------------------------------------
// 12. AI Prompt Engineering & Gemini API Client
// --------------------------------------------------------------------------
async function triggerPIDGeneration() {
    navigateToPanel("processing");
    
    const isMockMode = !state.apiKey;
    const progressFill = selectors.progressBarFill;
    const steps = document.querySelectorAll(".proc-step");
    
    let currentProgress = 5;
    if (progressFill) progressFill.style.width = currentProgress + "%";

    // Progress updates interval
    const updateProgress = (stepIndex, widthVal) => {
        steps.forEach((s, idx) => {
            if (idx < stepIndex) {
                s.className = "proc-step completed";
                s.querySelector(".proc-bullet").innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
            } else if (idx === stepIndex) {
                s.className = "proc-step active";
                s.querySelector(".proc-bullet").innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i>`;
            } else {
                s.className = "proc-step";
                s.querySelector(".proc-bullet").innerHTML = `<i class="fa-solid fa-circle"></i>`;
            }
        });
        if (progressFill) progressFill.style.width = widthVal + "%";
    };

    if (isMockMode) {
        // Run mock animation
        const runMockStep = (stepIdx, pct, delay) => {
            return new Promise(resolve => setTimeout(() => {
                updateProgress(stepIdx, pct);
                resolve();
            }, delay));
        };
        
        await runMockStep(1, 15, 600);
        await runMockStep(2, 30, 600);
        await runMockStep(3, 45, 600);
        await runMockStep(4, 60, 600);
        await runMockStep(5, 75, 600);
        await runMockStep(6, 90, 600);
        await runMockStep(7, 100, 500);
        
        // Finalize demo output
        const mockMd = generateMockMarkdownDocument();
        finalizeDocumentGeneration(mockMd);
    } else {
        // Run real Gemini API Request
        try {
            // Step 1: Processing inputs
            updateProgress(0, 10);
            await sleep(400);
            
            // Step 2: Preparing call
            updateProgress(1, 20);
            const prompt = constructGeminiPrompt();
            
            // Step 3: Calling API
            updateProgress(2, 35);
            
            // Start polling progress to simulate AI thought
            let aiTimer = setInterval(() => {
                if (currentProgress < 90) {
                    currentProgress += 3;
                    if (progressFill) progressFill.style.width = currentProgress + "%";
                    // Advance active tick labels dynamically
                    if (currentProgress > 45 && currentProgress <= 60) updateProgress(3, currentProgress);
                    if (currentProgress > 60 && currentProgress <= 75) updateProgress(4, currentProgress);
                    if (currentProgress > 75 && currentProgress <= 85) updateProgress(5, currentProgress);
                    if (currentProgress > 85) updateProgress(6, currentProgress);
                }
            }, 600);
            
            const responseText = await callGeminiAPI(prompt);
            clearInterval(aiTimer);
            
            // Step 7: Completed
            updateProgress(7, 100);
            await sleep(400);
            
            finalizeDocumentGeneration(responseText);
        } catch (error) {
            console.error("Gemini API Error:", error);
            alert(`API Error: ${error.message || "Failed to communicate with Gemini API"}. Switched to Demo Mock Document.`);
            finalizeDocumentGeneration(generateMockMarkdownDocument());
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Build the structured request payload
async function callGeminiAPI(promptText) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${state.aiModel}:generateContent?key=${state.apiKey}`;
    
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: promptText
                        }
                    ]
                }
            ],
            generationConfig: {
                temperature: 0.2, 
                topP: 0.8,
                maxOutputTokens: 8192 
            }
        })
    });
    
    if (!response.ok) {
        const errorJson = await response.json().catch(() => ({}));
        throw new Error(errorJson.error?.message || `HTTP ${response.status}`);
    }
    
    const json = await response.json();
    return json.candidates[0].content.parts[0].text;
}

// Construct detailed PMO instructions prompt
function constructGeminiPrompt() {
    const data = getFormDataObject();
    const isHe = state.lang === "he";
    const languageLabel = isHe ? "HEBREW (עברית)" : "ENGLISH";
    
    // Format scope arrays into bullet lists
    const inScopeList = data.inScope.map(i => `- ${i}`).join("\n");
    const outScopeList = data.outScope.map(i => `- ${i}`).join("\n");
    
    return `You are a Senior Project Management Office (PMO) director.
Your task is to write a highly professional, comprehensive, and detailed Project Initiation Document (PID) in ${languageLabel}.

Here is the raw data entered by the project manager:
=========================================
1. PROJECT IDENTIFICATION DETAILS
- Project Name: ${data.projectName}
- Initiation Date: ${data.initiationDate}
- Business Owner: ${data.businessOwner}
- Project Manager: ${data.projectManager}
- Domain: ${data.domain}
- Priority: ${data.priority}

2. BACKGROUND & CURRENT STATE
- Current State Description: ${data.currentState}
- Affected Audiences: ${data.affectedAudiences}
- Existing Workflows: ${data.existingWorkflows}
- Business Pain Points: ${data.painPoints}
- Event/Inquiry Volumes: ${data.volumes || 'None provided'}

3. GOALS & VALUE PROPOSITION
- Reason for Being (core statement components):
  * Changing: ${data.sentenceCurrent}
  * To: ${data.sentenceTarget}
  * For: ${data.sentenceWho}
  * Via: ${data.sentenceHow}
  * To Achieve: ${data.sentenceWhy}
- Business Goals: ${data.goals}
- ROI / Benefits: ${data.benefits}
- Deadlines & Regulatory Context: ${data.deadline}
- Justification (Why now): ${data.justification}

4. SCOPE BOUNDARIES
- IN SCOPE:
${inScopeList || 'None specified'}
- OUT OF SCOPE:
${outScopeList || 'None specified'}

5. INITIAL RESOURCE ESTIMATES
- PM Hours: ${data.hoursPM} hrs
- System Analyst Hours: ${data.hoursAnalyst} hrs
- QA Hours: ${data.hoursQA} hrs
- Developer Hours: ${data.hoursDev} hrs
- Infra Hours: ${data.hoursInfra} hrs
- External Suppliers Cost: ${data.costExternal}
=========================================

YOUR OUTPUT INSTRUCTIONS:
Generate a complete Project Initiation Document containing exactly sections 1 through 12.
You must write in ${languageLabel}. Make it professional, corporate, and formal.
Output ONLY Markdown code. Do NOT wrap the markdown block in \`\`\`markdown or other blocks - return raw markdown starting with "# ${data.projectName}".

The document must follow this exact section structure:

# [Project Name] (Document Title)

## 1. פרטי פרויקט (Project Details)
Generate a clean Markdown table with:
- Project Name
- Initiation Date
- Business Owner
- Project Manager
- Project Domain
- Priority Level

## 2. רקע ומצב קיים (Background & Current State)
Write professional paragraphs for these subsections (use bolding or clean layout):
- **2.1 תיאור מצב נוכחי**: Elaborate on the input, describing the current workflows, legacy systems, and manual steps.
- **2.2 אוכלוסיות מושפעות**: Elaborate on the specific departments, customer tiers, or users impacted.
- **2.3 תהליכי עבודה קיימים**: Detail high-level procedural flows based on the input.
- **2.4 תיאור כאבים עסקיים עיקריים**: Elaborate on the operational challenges, cost of errors, delays, and friction.
- **2.5 נפחי אירועים/פניות**: Reference the volume data provided or extrapolate reasonable industry estimates if details are sparse.

## 3. מטרות עסקיות ותרומה (Business Goals & Contribution)
- **3.1 משפט קיום של הפרויקט**: Compile and expand the "Reason for Being" statement into a cohesive, inspiring paragraph: "משנים את [X] ל-[Y] עבור [Z] באמצעות [W] כדי להשיג [V]."
- **3.2 הגדרת מטרות עסקיות**: Write a list of SMART (Specific, Measurable, Achievable, Relevant, Time-bound) goals.
- **3.3 תרומה עסקית וצפי תועלת**: Elaborate on the direct financial benefits, ROI, support efficiency, cost reductions, or revenue streams.
- **3.4 דדליין עסקי/רגולטורי**: Detail the target deadlines, critical path constraints, and consequences of delays.
- **3.5 הצדקת פרויקט (למה עכשיו?)**: Write a compelling justification paragraph outlining urgency and strategic fit.

## 4. תכולות הפרויקט (Project Scope)
- **4.1 IN SCOPE**: List the specific deliverables in detail. Elaborate on each bullet point to make it crystal clear.
- **4.2 OUT OF SCOPE**: List explicit boundaries to avoid creep. Elaborate on why they are excluded.

## 5. הערכת משאבים (Resource Estimates)
Present the resource numbers in a clean Markdown table with categories: Role/Resource, Estimated Hours/Cost, Details.
Include PM, Analyst, QA, Devs, Infra, and external budgets.

## 6. לוחות זמנים (Timeline)
Based on the size of the project (calculated from resource hours), propose a realistic timeline:
- **6.1 רבעון יעד לביצוע**: Suggest target quarter (e.g. Q3 2026).
- **6.2 תאריך התחלת הפרויקט (הערכה)**: Propose a logical start date.
- **6.3 תאריך סיום הפרויקט (הערכה)**: Propose a logical completion date.
- **6.4 אבני דרך מרכזיות**: Provide a Markdown table of milestones (Initiation, Requirements, Design, Development, Testing, Deployment) with estimated target dates.

## 7. בעלי עניין (Stakeholders)
Identify stakeholders based on the project domain:
- **7.1 בעלי עניין עסקיים**: List departments, owners, commercial managers.
- **7.2 בעלי עניין טכנולוגיים**: List dev leads, QA leads, security experts, ops.
- **7.3 גורמים נוספים**: Legal, Compliance, Security, Support, Marketing (choose what's relevant).

## 8. קונספט פתרון ראשוני (Initial Solution Concept)
- **8.1 תיאור קונספט ראשוני לפתרון**: Draft a structured description of the proposed solution architecture (API integrations, UI dashboards, cloud services, automated batch jobs, etc.) to address the pain points.
- **8.2 תרשים/סכמה**: Describe in text what a visual flowchart showing the workflow mapping inputs to outputs would contain.
- **8.3 אלטרנטיבות שנשקלות**: List 1-2 alternative solutions (e.g., buying a SaaS platform vs. custom development, keeping manual workarounds with more staff) and why this concept is superior.

## 9. סיכונים והשפעות רוחביות על תהליכים ונהלים (Risks & Impacts)
- **9.1 תהליכים מושפעים**: Detail workflows that will need updating.
- **9.2 נהלים קיימים הצפויים להשתנות**: List company manuals, procedures, training guides to update.
- **9.3 מערכות מעורבות**: List IT systems that will require configuration or API connections.
- **9.4 השפעות רוחביות בארגון/ממשקים**: Workload on other departments.
- **9.5 סיכונים מרכזיים לפרויקט (עד 3)**: Create a Markdown table with columns: סיכון (Risk Description), סבירות 1-5 (Likelihood), חומרה 1-5 (Severity), פעולה מונעת/לטיפול (Mitigation Plan). Make these highly relevant to the inputs.

## 10. אחריות וסכמות (Responsibility Matrix - RACI)
Generate a clean RACI Markdown table showing core activities (Initiation, Requirements, System Design, Development, QA testing, Deployment, Support Handover) as rows, and roles (Business Owner, Project Manager, PMO, Tech Lead, Analyst, QA Lead) as columns. Populate cells with R (Responsible), A (Accountable), C (Consulted), or I (Informed). Ensure the PM is R/A for execution, Business Owner is A for business value, and Tech Lead is R for Development.

## 11. מדידה והגדרת הצלחה (Measurement & Success KPIs)
- **11.1 מדדי הצלחה (KPIs)**: List 3-4 specific metrics (e.g. 20% reduction in ticket handling time, zero compliance fines, SLA compliance).
- **11.2 Baseline נוכחי**: Outline current baseline numbers (referencing pain points/volumes).
- **11.3 יעד שיפור**: Outline precise target improvements.

## 12. אישורים (Approvals)
Create a clean approval table with columns: תפקיד (Role), שם (Name), חתימה (Signature), תאריך (Date). Add rows for Business Owner, Department Head, and PMO.

Keep all content highly professional, logical, cohesive, and deeply contextualized with the user's input data. Keep headings in the requested language. Do NOT use placeholder text like "[Insert date here]". Generate actual realistic dates based on the initiation date!`;
}

// --------------------------------------------------------------------------
// 13. Markdown to HTML Compiler
// --------------------------------------------------------------------------
function parseMarkdownToHtml(md) {
    if (!md) return "";
    
    let html = md;
    
    // Escape standard HTML tags inside the MD to prevent scripts execution
    html = html
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt bridge;"); // placeholder logic
        
    html = html.replace(/&gt bridge;/g, "&gt;");
        
    // Replace horizontal lines
    html = html.replace(/^---$/gm, '<hr>');

    // Replace Headings
    html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');
    html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
    html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
    html = html.replace(/^#### (.*?)$/gm, '<h4>$1</h4>');

    // Replace bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace italic text
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Compile Markdown tables into HTML tables
    html = compileMarkdownTables(html);

    // Replace bullet points (unordered lists)
    html = html.replace(/^\s*-\s+(.*?)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');
    
    // Compile line breaks
    html = html.split(/\n\n+/).map(para => {
        if (para.trim().startsWith('<h') || 
            para.trim().startsWith('<table') || 
            para.trim().startsWith('<ul') || 
            para.trim().startsWith('<hr')) {
            return para;
        }
        return `<p>${para.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

    return `<div class="pid-document-html">${html}</div>`;
}

function compileMarkdownTables(text) {
    const lines = text.split('\n');
    let inTable = false;
    let tableHeaders = [];
    let tableRows = [];
    let result = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        const isTableDivider = /^\|?\s*:?-+:?\s*(\|?\s*:?-+:?\s*)*\|?$/.test(line);
        const isTableRow = line.startsWith('|') && line.endsWith('|');
        
        if (isTableRow) {
            const cells = line.split('|').map(c => c.trim()).filter((c, idx, arr) => {
                return idx > 0 && idx < arr.length - 1;
            });
            
            if (isTableDivider) {
                continue;
            }
            
            if (!inTable) {
                inTable = true;
                tableHeaders = cells;
            } else {
                tableRows.push(cells);
            }
        } else {
            if (inTable) {
                result.push(buildHtmlTable(tableHeaders, tableRows));
                inTable = false;
                tableHeaders = [];
                tableRows = [];
            }
            result.push(lines[i]);
        }
    }
    
    if (inTable) {
        result.push(buildHtmlTable(tableHeaders, tableRows));
    }
    
    return result.join('\n');
}

function buildHtmlTable(headers, rows) {
    let html = '<table><thead><tr>';
    headers.forEach(h => {
        html += `<th>${h}</th>`;
    });
    html += '</tr></thead><tbody>';
    
    rows.forEach(row => {
        html += '<tr>';
        row.forEach(cell => {
            let cellClass = "";
            
            if (cell === 'R' || cell === 'A' || cell === 'C' || cell === 'I') {
                cellClass = `class="raci-role-a"`;
            }
            else if (cell === 'גבוהה' || cell === 'High' || cell === '5' || cell === '4') {
                if (row.indexOf(cell) > 0) cellClass = `class="risk-high"`; 
            } else if (cell === 'בינונית' || cell === 'Medium' || cell === '3') {
                if (row.indexOf(cell) > 0) cellClass = `class="risk-medium"`;
            } else if (cell === 'נמוכה' || cell === 'Low' || cell === '1' || cell === '2') {
                if (row.indexOf(cell) > 0) cellClass = `class="risk-low"`;
            }
            
            html += `<td ${cellClass}>${cell}</td>`;
        });
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    return html;
}

// --------------------------------------------------------------------------
// 14. Result Workspace Actions & Exporters
// --------------------------------------------------------------------------
function finalizeDocumentGeneration(mdText) {
    const data = getFormDataObject();
    
    if (selectors.editorTitle) selectors.editorTitle.textContent = data.projectName;
    if (selectors.markdownInputBox) selectors.markdownInputBox.value = mdText;
    updateDocumentPreview(mdText);
    
    // Save generated markdown state into localStorage draft list
    const idx = state.drafts.findIndex(d => d.id === state.currentDraftId);
    if (idx !== -1) {
        state.drafts[idx].markdown = mdText;
        state.drafts[idx].status = 'completed';
        state.drafts[idx].updatedAt = Date.now();
    }
    saveDraftsToStorage();
    
    // Navigate to editor panel workspace
    navigateToPanel("editor");
}

function updateDocumentPreview(mdText) {
    if (selectors.previewPaper) {
        selectors.previewPaper.innerHTML = parseMarkdownToHtml(mdText);
    }
}

function copyDocumentToClipboard() {
    if (!selectors.markdownInputBox) return;
    selectors.markdownInputBox.select();
    document.execCommand("copy");
    alert(translations[state.lang].msg_copied);
}

// Download HTML wrapper optimized for Microsoft Word import
function downloadWordDocument() {
    const docTitle = (selectors.editorTitle ? selectors.editorTitle.textContent : "") || "Project_Initiation_Document";
    const bodyHtml = selectors.previewPaper ? selectors.previewPaper.innerHTML : "";
    const isRtl = state.lang === "he";
    
    const htmlDocContent = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
        <title>${docTitle}</title>
        <!--[if gte mso 9]>
        <xml>
            <w:WordDocument>
                <w:View>Print</w:View>
                <w:Zoom>100</w:Zoom>
                <w:DoNotOptimizeForBrowser/>
            </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
            body {
                font-family: Arial, sans-serif;
                font-size: 11pt;
                line-height: 1.5;
                direction: ${isRtl ? 'rtl' : 'ltr'};
                margin: 2cm;
            }
            h1 {
                font-size: 20pt;
                font-weight: bold;
                color: #1e3a8a;
                border-bottom: 3px solid #1e3a8a;
                padding-bottom: 6px;
                text-align: center;
                margin-bottom: 24pt;
            }
            h2 {
                font-size: 14pt;
                font-weight: bold;
                color: #1e3a8a;
                border-bottom: 1px solid #cbd5e1;
                margin-top: 24pt;
                margin-bottom: 12pt;
                padding-bottom: 3px;
                page-break-before: always;
            }
            h3 {
                font-size: 12pt;
                font-weight: bold;
                color: #2f80ed;
                margin-top: 18pt;
                margin-bottom: 6pt;
            }
            p, li {
                font-size: 11pt;
                margin-bottom: 8pt;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin: 18pt 0;
            }
            th, td {
                border: 1px solid #94a3b8;
                padding: 6pt 8pt;
                text-align: ${isRtl ? 'right' : 'left'};
            }
            th {
                background-color: #f1f5f9;
                font-weight: bold;
            }
            tr:nth-child(even) {
                background-color: #f8fafc;
            }
            .raci-role-a { font-weight: bold; color: #1e3a8a; }
            .risk-high { background-color: #fee2e2; color: #991b1b; }
            .risk-medium { background-color: #fef3c7; color: #92400e; }
            .risk-low { background-color: #d1fae5; color: #065f46; }
        </style>
    </head>
    <body>
        ${bodyHtml}
    </body>
    </html>
    `;
    
    const blob = new Blob([htmlDocContent], { type: "application/msword;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${docTitle.replace(/\s+/g, '_')}_PID.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function printDocument() {
    window.print();
}

// --------------------------------------------------------------------------
// 15. Helper Utilities
// --------------------------------------------------------------------------
function escapeHtml(text) {
    if (!text) return "";
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Generates high-quality mockup document on Demo mode
function generateMockMarkdownDocument() {
    const data = getFormDataObject();
    const isHe = state.lang === "he";
    const dateStr = new Date(data.initiationDate).toLocaleDateString(isHe ? 'he-IL' : 'en-US');
    
    const dStart = new Date(data.initiationDate);
    dStart.setDate(dStart.getDate() + 14); 
    const dReq = new Date(dStart); dReq.setDate(dReq.getDate() + 30);
    const dDesign = new Date(dReq); dDesign.setDate(dDesign.getDate() + 20);
    const dDev = new Date(dDesign); dDev.setDate(dDev.getDate() + 60);
    const dQA = new Date(dDev); dQA.setDate(dQA.getDate() + 30);
    const dDeploy = new Date(dQA); dDeploy.setDate(dQA.getDate() + 10);
    
    const scopeInStr = data.inScope.length > 0 ? 
        data.inScope.map(i => `- ${i} - פיתוח והרחבה מלאה כולל אינטגרציה.`).join("\n") : 
        `- פיתוח רכיבי הליבה של פרויקט ${data.projectName}.\n- הקמת ממשקי API ומערכות ניהול מבוססות ענן.\n- כלי התראות ודיווח ניהוליים PMO.`;
        
    const scopeOutStr = data.outScope.length > 0 ? 
        data.outScope.map(i => `- ${i} - מוחרג מהתכולה לפאזה זו.`).join("\n") : 
        `- תמיכה במערכות Legacy ישנות מחוץ לתחום.\n- פיתוח מובייל נייטיב ייעודי (מתוכנן לפאזה ב').`;

    if (isHe) {
        return `# מסמך ייזום פרויקט: ${data.projectName}

## 1. פרטי פרויקט

| שדה | פירוט |
| --- | --- |
| **שם הפרויקט** | ${data.projectName} |
| **תאריך ייזום** | ${dateStr} |
| **Owner עסקי** | ${data.businessOwner} |
| **מנהל פרויקט** | ${data.projectManager} |
| **תחום** | ${data.domain} |
| **רמת עדיפות מבוקשת** | ${data.priority} |

---

## 2. רקע ומצב קיים

### 2.1 תיאור מצב נוכחי
כיום, התהליך מתבצע באופן שבו: ${data.currentState}. מצב זה מאופיין בעבודה ידנית רבה, היעדר בקרות מובנות והסתמכות על מערכות מיושנות. חוסר הסינכרון בין הממשקים השונים גורם לצווארי בקבוק המעכבים את השלמת המשימות.

### 2.2 אוכלוסיות מושפעות
הגורמים המושפעים באופן ישיר מהמצב הקיים הינם: ${data.affectedAudiences}. אלו חווים עומס תפעולי, זמני טיפול ארוכים ותסכול רב כתוצאה מהיעדר כלים מודרניים.

### 2.3 תהליכי עבודה קיימים
תיאור ברמה גבוהה של התהליכים הרלוונטיים: ${data.existingWorkflows}. התהליכים כוללים הזנת נתונים כפולה במספר מערכות במקביל ואינטגרציה ידנית של קבצי Excel לצורך הפקת דוחות, דבר המגדיל את הסיכון לטעויות אנוש.

### 2.4 תיאור כאבים עסקיים עיקריים
הכאבים המרכזיים שזוהו בתהליך הנוכחי הם: ${data.painPoints}. כאבים אלו גורמים לעיכובים קריטיים במסירת פרויקטים, לעלויות תפעוליות גבוהות מהנדרש ולפגיעה בשביעות רצון הלקוחות והמשתמשים.

### 2.5 נפחי אירועים/פניות
הערכה כמותית של הבעיה: ${data.volumes || 'כעשרות אירועים חוזרים בכל חודש העולים לחברה שעות עבודה יקרות וסיכון תפעולי מתמשך'}.

---

## 3. מטרות עסקיות ותרומה

### 3.1 משפט קיום של הפרויקט
משנים את **${data.sentenceCurrent || '[המצב הקיים]'}** ל־**${data.sentenceTarget || '[מצב רצוי]'}**, עבור **${data.sentenceWho || '[אוכלוסיית היעד]'}**, באמצעות **${data.sentenceHow || '[דרך המימוש]'}**, כדי להשיג **${data.sentenceWhy || '[התועלת המרכזית]'}**.

### 3.2 הגדרת מטרות עסקיות
1. שיפור יעילות זמני הטיפול בלפחות 30% בתוך חצי שנה ממועד העלייה לאוויר.
2. יצירת בקרות אוטומטיות לצמצום שיעור שגיאות הזנת הנתונים לערך השואף לאפס.
3. הטמעת מערכת דיווחים אחידה לקבלת תובנות בזמן אמת לדרג הניהולי.

### 3.3 תרומה עסקית וצפי תועלת
התרומה העסקית כוללת חיסכון ישיר בשעות עבודה של עובדי החברה, שיפור שביעות הרצון (NPS) של משתמשי הקצה, ומניעת קנסות רגולטוריים או הפסדים כספיים הנובעים מטעויות תפעוליות. צפי החזר ההשקעה (ROI) מוערך בתוך 12 חודשים מסיום הפרויקט.

### 3.4 דדליין עסקי/רגולטורי
יעד הפרויקט והקשר שלו: ${data.deadline}. אי עמידה ביעד זה תחשוף את הארגון לסיכונים משמעותיים ולפגיעה תחרותית בשוק.

### 3.5 הצדקת פרויקט (למה עכשיו?)
הפרויקט הכרחי כעת בשל: ${data.justification}. המורכבות והאופי החוצה-מערכות של הבעיה אינם מאפשרים פתרון נקודתי ומצריכים ניהול פרויקטאלי מסודר ורחב.

---

## 4. תכולות הפרויקט

### 4.1 IN SCOPE
${scopeInStr}

### 4.2 OUT OF SCOPE
${scopeOutStr}

---

## 5. הערכת משאבים

| גורם / תפקיד | הערכת שעות / עלות | פירוט המשאבים והתחייבות |
| --- | --- | --- |
| מנהל פרויקט (PM) | ${data.hoursPM} שעות | ניהול לוחות זמנים, תיאום בין צוותים ובקרת תקציב |
| מנתח מערכות | ${data.hoursAnalyst} שעות | כתיבת מסמכי אפיון פונקציונליים וטכנולוגיים |
| בודקים / QA | ${data.hoursQA} שעות | תכנון בדיקות (STP/STD) וביצוע בדיקות קבלה (UAT) |
| צוותי פיתוח חיצוניים | ${data.hoursDev} שעות | פיתוח תוכנה, ממשקי API והתאמות מערכת |
| תשתיות ותקשורת | ${data.hoursInfra} שעות | הקמת שרתים, הגדרות רשת ואבטחת מידע בענן |
| ספקים ורישיונות חיצוניים | ${data.costExternal} | רכש רישיונות תוכנה ומימון ספקי מיקור חוץ |

---

## 6. לוחות זמנים

### 6.1 רבעון יעד לביצוע
Q3 2026

### 6.2 תאריך התחלת הפרויקט (הערכה)
${dStart.toLocaleDateString('he-IL')}

### 6.3 תאריך סיום הפרויקט (הערכה)
${dDeploy.toLocaleDateString('he-IL')}

### 6.4 אבני דרך מרכזיות

| אבן דרך | תאריך יעד מוערך | פירוט תוצר מצופה |
| --- | --- | --- |
| אישור מסמך ייזום (Kickoff) | ${dStart.toLocaleDateString('he-IL')} | חתימת בעלי העניין ומנהל הפרויקט |
| סיום אפיון דרישות מפורט | ${dReq.toLocaleDateString('he-IL')} | מסמך אפיון פונקציונלי (FSD) מאושר |
| סיום עיצוב ארכיטקטורה | ${dDesign.toLocaleDateString('he-IL')} | ארכיטקטורת תוכנה וסכימת ממשקים מאושרת |
| סיום שלב הפיתוח | ${dDev.toLocaleDateString('he-IL')} | קוד במערכת ובדיקות יחידה (UT) מוכנות |
| סיום בדיקות מערכת ו-QA | ${dQA.toLocaleDateString('he-IL')} | דוח בדיקות תקין ללא באגים קריטיים |
| עלייה לאוויר (Deployment) | ${dDeploy.toLocaleDateString('he-IL')} | התקנה בייצור והשקת הפרויקט למשתמשים |

---

## 7. בעלי עניין (Stakeholders)

### 7.1 בעלי עניין עסקיים
- **מוביל עסקי (Business Owner)**: ${data.businessOwner} - אחראי על הגדרת הדרישות העסקיות ואישור התוצרים.
- **הנהלת אגף תפעול ושירות**: לקוחות הקצה התפעוליים שיושפעו ישירות משינוי זרימת המידע.

### 7.2 בעלי עניין טכנולוגיים
- **מנהל תחום פיתוח תוכנה**: אחראי על הקצאת מתכנתים ועמידה ביעדי קוד.
- **מנהל אבטחת מידע וסייבר (CISO)**: אחראי על אישור אבטחת הנתונים וממשקי ה-API.
- **מנהל צוות תשתיות וענן**: אחראי על הקצאת משאבי שרתים וסביבות בדיקה/ייצור.

### 7.3 גורמים נוספים
- **יועץ משפטי / רגולציה**: בדיקת תאימות התהליך החדש לחוק הגנת הפרטיות.

---

## 8. קונספט פתרון ראשוני

### 8.1 תיאור קונספט ראשוני לפתרון
הפתרון יתבסס על הקמת פורטל אינטראקטיבי מרכזי (Dashboard) מבוסס טכנולוגיות ווב מודרניות, שישמש כממשק אחיד למשתמשי הקצה. הפורטל יתחבר באמצעות ממשקי API מאובטחים למערכות הליבה הקיימות, ויבצע אוטומציה של זרימת המידע תוך הטמעת מנוע וולידציה חכם למניעת שגיאות הזנה.

### 8.2 תרשים/סכמה
תרשים זרימת המידע המוצע:
\`\`\`
[משתמש קצה] ──> (ממשק הפורטל החדש) ──> [מנוע הבקרה והוולידציה]
                                             │ (API מאובטח)
                                             ▼
                                     [מערכת ליבה ארגונית]
\`\`\`
התרשים מתאר כיצד המשתמש מזין נתונים בממשק החדש, המערכת מבצעת אימות תקינות ומעבירה את המידע ישירות לליבה הארגונית ללא צורך במגע יד אדם.

### 8.3 אלטרנטיבות שנשקלות
1. **שימור המצב הקיים ותגבור כוח אדם**: נפסל בשל עלויות שוטפות גבוהות ואי-מניעת טעויות אנוש.
2. **רכישת מערכת מדף מוכנה (SaaS)**: נפסל בשל עלויות רישוי גבוהות וקושי רב בביצוע התאמות ואינטגרציות מול מערכות הליבה המקומיות.

---

## 9. סיכונים והשפעות רוחביות על תהליכים ונהלים

### 9.1 תהליכים מושפעים
תהליך קליטת הנתונים, תהליכי הפקת דוחות PMO חודשיים ותהליך שירות הלקוחות בקווי התמיכה.

### 9.2 נהלים קיימים הצפויים להשתנות
נדרש לעדכן את מדריך השימוש למשתמשי הקצה, ולעדכן את נוהל אבטחת המידע וזכויות הגישה למערכת הליבה.

### 9.3 מערכות מעורבות
מערכת הליבה הפיננסית, בסיס הנתונים המרכזי ושרתי ה-API הארגוניים.

### 9.4 השפעות רוחביות בארגון/ממשקים
עומס זמני על צוות אבטחת מידע לבדיקת הממשקים, והצורך בהדרכות עובדים חוצות-ארגון על הממשק החדש.

### 9.5 סיכונים מרכזיים לפרויקט

| סיכון | סבירות (1-5) | חומרה (1-5) | פעולה לטיפול בסיכון |
| --- | --- | --- | --- |
| עיכוב באישור ממשקי ה-API מצד צוותי אבטחת מידע | 3 | 4 | שילוב נציג אבטחת מידע כבר משלב האפיון הראשוני |
| חוסר שיתוף פעולה או קשיי אימוץ של משתמשי הקצה | 2 | 4 | ביצוע הדרכות ממוקדות ומינוי "שגרירי שינוי" בכל מחלקה |
| חריגה מלוחות הזמנים עקב מורכבות פיתוח לא צפויה | 3 | 3 | עבודה במתודולוגיית Agile וניהול עתודת זמן (Buffer) |

---

## 10. אחריות וסכמות (RACI Matrix)

| שלב בפרויקט | מנהל פרויקט (PM) | Owner עסקי | PMO | מוביל טכנולוגי | מנתח מערכות | בודק QA |
| --- | --- | --- | --- | --- | --- | --- |
| **אישור ייזום (PID)** | R | A | C | C | I | I |
| **אפיון דרישות** | R | A | I | C | R | I |
| **עיצוב וארכיטקטורה**| I | I | I | A | R | I |
| **פיתוח קוד** | I | I | I | R | I | I |
| **בדיקות מערכת** | I | I | I | I | C | R |
| **הטמעה ועלייה לאוויר**| R | A | C | R | I | C |

---

## 11. מדידה והגדרת הצלחה

### 11.1 מדדי הצלחה (KPI'S)
1. **זמן טיפול (Handling Time)**: ירידה ממוצעת של 40% בזמן ביצוע המשימה.
2. **שיעור שגיאות (Error Rate)**: הפחתה לערך נמוך מ-1%.
3. **שביעות רצון (NPS)**: ציון NPS של 8 ומעלה בקרב המשתמשים.

### 11.2 Baseline נוכחי
כיום זמן הטיפול עומד על כ-45 דקות למשימה בודדת, עם אחוז שגיאות ידניות של כ-8% הדורשות סבבי תיקון ארוכים.

### 11.3 יעד שיפור
הגעה לזמן טיפול ממוצע של 25 דקות למשימה בודדת בתוך 3 חודשים מעלייה לאוויר, ושיעור שגיאות הזנה אפסי הודות לבקרות החדשות.

---

## 12. אישורים

| תפקיד | שם בעל תפקיד | חתימה ואישור | תאריך אישור |
| --- | --- | --- | --- |
| **Business Owner** | ${data.businessOwner} | __________________ | ${dateStr} |
| **מנהל/ת מחלקה** | __________________ | __________________ | ${dateStr} |
| **נציג PMO** | __________________ | __________________ | ${dateStr} |`;
    } else {
        return `# Project Initiation Document: ${data.projectName}

## 1. Project Details

| Field | Description |
| --- | --- |
| **Project Name** | ${data.projectName} |
| **Initiation Date** | ${dateStr} |
| **Business Owner** | ${data.businessOwner} |
| **Project Manager** | ${data.projectManager} |
| **Project Domain** | ${data.domain} |
| **Requested Priority** | ${data.priority} |

---

## 2. Background & Current State

### 2.1 Current State Description
Currently, the process operates as follows: ${data.currentState}. This legacy workflow requires significant manual inputs, is prone to tracking challenges, and depends heavily on outdated databases and spreadsheets. The isolation of current system layers blocks smooth collaborative handoffs.

### 2.2 Affected Audiences
The specific user groups affected by the current state are: ${data.affectedAudiences}. They encounter high administrative overhead, delayed actions, and operational friction due to the lack of updated digital dashboards.

### 2.3 Existing Workflows
High-level description of related processes: ${data.existingWorkflows}. Workflows rely on double-entry of critical records into disconnected systems and manual data alignment via Excel.

### 2.4 Key Business Pain Points
The core pain points causing friction are: ${data.painPoints}. These generate project delivery bottlenecks, high operational costs, and risk of critical process errors.

### 2.5 Inquiry/Event Volumes
Quantifiable volume of current issues: ${data.volumes || 'Dozens of recurring monthly incidents, translating to hundreds of lost work hours and ongoing operational risk.'}.

---

## 3. Business Goals & Value

### 3.1 Project's Reason for Being
We are changing **${data.sentenceCurrent || '[Current State]'}** to **${data.sentenceTarget || '[Target State]'}** for **${data.sentenceWho || '[Target Users]'}** via **${data.sentenceHow || '[Tech Solution]'}** to achieve **${data.sentenceWhy || '[Core Value]'}**.

### 3.2 Business Goals
1. Reduce transaction turnaround times by 35% within 6 months of system deployment.
2. Automate input validations to decrease manual data input errors to less than 1%.
3. Deploy unified PMO dashboard analytics for real-time tracking.

### 3.3 Business Benefits & ROI
Operational benefits include direct resource savings, improved user satisfaction (NPS), and mitigated regulatory non-compliance risks. Expected ROI break-even point is estimated within 12 months post-launch.

### 3.4 Business / Regulatory Deadline
Regulatory and commercial target: ${data.deadline}. Missing this target dates will expose the firm to financial or competitive risks.

### 3.5 Project Justification (Why now?)
Justification context: ${data.justification}. The complexity of cross-system data interfaces requires structured project management, rather than simple ad-hoc system configs.

---

## 4. Project Scope

### 4.1 IN SCOPE
${scopeInStr}

### 4.2 OUT OF SCOPE
${scopeOutStr}

---

## 5. Resource Estimation

| Role / Resource | Estimated Hours / Cost | Scope of Work & Allocation |
| --- | --- | --- |
| Project Manager | ${data.hoursPM} hrs | Scheduling, stakeholder alignment, and risk tracking |
| System Analyst | ${data.hoursAnalyst} hrs | Drafting detailed technical specifications and UAT plans |
| QA Specialist | ${data.hoursQA} hrs | Quality test plan writing and execution |
| Core Developers | ${data.hoursDev} hrs | Software engineering, database setup, and API integrations |
| Infrastructure Team | ${data.hoursInfra} hrs | Server orchestration and security firewall configs |
| External Suppliers / Licenses | ${data.costExternal} | Software licenses and third-party supplier funding |

---

## 6. Timeline

### 6.1 Target Quarter
Q3 2026

### 6.2 Estimated Start Date
${dStart.toLocaleDateString('en-US')}

### 6.3 Estimated Completion Date
${dDeploy.toLocaleDateString('en-US')}

### 6.4 Key Milestones

| Milestone | Target Date | Expected Deliverable |
| --- | --- | --- |
| PID Sign-Off (Kickoff) | ${dStart.toLocaleDateString('en-US')} | Business and tech stakeholder alignment |
| Requirements Freeze | ${dReq.toLocaleDateString('en-US')} | Detailed functional specs (FSD) approved |
| Architecture Signed Off | ${dDesign.toLocaleDateString('en-US')} | System design document (SDD) approved |
| Development Completed | ${dDev.toLocaleDateString('en-US')} | Code frozen and unit test reports generated |
| QA Test Cycles Completed | ${dQA.toLocaleDateString('en-US')} | UAT complete with zero blocking bugs |
| Production Release | ${dDeploy.toLocaleDateString('en-US')} | System live and handed over to support teams |

---

## 7. Stakeholders

### 7.1 Business Stakeholders
- **Business Owner**: ${data.businessOwner} - Defines core business logic and signs off deliverables.
- **Operations & Support Lead**: Managers representing the main department users.

### 7.2 Tech Stakeholders
- **Software Engineering Manager**: Oversees dev team sprints and code quality.
- **Chief Information Security Officer (CISO)**: Authorizes secure APIs and compliance.
- **IT Infrastructure Director**: Provides server and database systems.

### 7.3 Other Stakeholders
- **Legal Compliance Team**: Verifies regulatory alignment with GDPR/Privacy guidelines.

---

## 8. Initial Solution Concept

### 8.1 Solution Concept Description
The solution involves building a modern web portal (Single Page Dashboard) to act as a unified interface for operational staff. The portal will securely connect to legacy databases via encrypted API gateways and run real-time automated input validations to prevent entry errors.

### 8.2 Diagram/Scheme
System data flow chart:
\`\`\`
[End User] ──> (New Web Dashboard UI) ──> [Validation Gateways]
                                                │ (Secure API)
                                                ▼
                                      [Core Corporate DB]
\`\`\`

### 8.3 Alternatives Considered
1. **Status Quo (Hiring more staff)**: Rejected due to recurring labor costs and failure to prevent human input errors.
2. **Commercial Off-the-Shelf (COTS) System**: Rejected due to high annual license costs and rigid customization limits.

---

## 9. Risks & Impacts

### 9.1 Process Impacts
Modifies data ingestion steps, monthly reporting structures, and user support routes.

### 9.2 Changing Procedures
Requires updates to user operational guides and CISO authentication policies.

### 9.3 Involved Systems
Central database system, API Gateways, and financial tracking logs.

### 9.4 Organizational Impacts
Brief training cycles needed across business units to adapt to the new dashboard interface.

### 9.5 Key Project Risks

| Risk Description | Likelihood (1-5) | Severity (1-5) | Mitigation Action Plan |
| --- | --- | --- | --- |
| API integration delays with legacy databases | 3 | 4 | Involve DB admins and tech leads in initial design reviews |
| Low user adoption rate of the new dashboard | 2 | 4 | Run interactive webinars and appoint training champions |
| Tight schedule limits due to regulatory deadlines | 3 | 3 | Plan development sprints in Agile and reserve buffer days |

---

## 10. Responsibility Matrix (RACI)

| Project Phase | Project Manager | Business Owner | PMO Lead | Tech Lead | System Analyst | QA Specialist |
| --- | --- | --- | --- | --- | --- | --- |
| **PID Approval** | R | A | C | C | I | I |
| **Requirements** | R | A | I | C | R | I |
| **System Design**| I | I | I | A | R | I |
| **Code Development** | I | I | I | R | I | I |
| **QA Testing** | I | I | I | I | C | R |
| **Deployment** | R | A | C | R | I | C |

---

## 11. Measurement & Success

### 11.1 Success KPIs
1. **Handling Time**: 40% average speed improvement per query.
2. **Error Rate**: Reduced to under 1% of total daily uploads.
3. **User Satisfaction**: Achieve NPS rating of 8 or above.

### 11.2 Current Baseline
Average task completion takes 45 minutes, with a manual typing error rate of 8% requiring time-consuming corrections.

### 11.3 Target Improvement
Reduce completion times to 25 minutes per query within 3 months of release, and eliminate typing errors.

---

## 12. Approvals

| Role | Name | Signature | Date |
| --- | --- | --- | --- |
| **Business Owner** | ${data.businessOwner} | __________________ | ${dateStr} |
| **Department Head** | __________________ | __________________ | ${dateStr} |
| **PMO Representative** | __________________ | __________________ | ${dateStr} |`;
    }
}
