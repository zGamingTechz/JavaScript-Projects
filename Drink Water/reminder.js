chrome.storage.sync.get('mode', (data) => {
    const mode = data.mode || 'video';

    const shouldRemind = () => {
        if (mode === 'always') return true;
        const videos = document.querySelectorAll('video');
        return [...videos].some(v => !v.paused && !v.ended && v.readyState > 2);
    };

    if (shouldRemind()) {
        const reminder = document.createElement("div");
        reminder.innerText = "💧 Remember to drink water!";
        Object.assign(reminder.style, {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "2em",
            color: "#ffffff",
            background: "rgba(0, 0, 0, 0.85)",
            padding: "20px 30px",
            borderRadius: "12px",
            zIndex: "999999",
            textAlign: "center",
        });
        document.body.appendChild(reminder);
        setTimeout(() => reminder.remove(), 8000);
    }
});