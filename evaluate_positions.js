import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto('http://localhost:5173/');
    
    // Wait for the elements to be present
    await page.waitForSelector('.path-img');
    await page.waitForSelector('.n1');
    
    // Get bounding boxes
    const pathBox = await page.evaluate(() => {
        const el = document.querySelector('.path-img');
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { x: rect.x, y: rect.y, width: rect.width, height: rect.height, bottom: rect.bottom };
    });
    
    console.log('Path Image:', pathBox);
    
    for (const n of ['.n1', '.n2', '.n3', '.n4']) {
        const nodeBox = await page.evaluate((selector) => {
            const el = document.querySelector(selector);
            const dot = el.querySelector('.dot');
            const card = el.querySelector('.card');
            if (!el || !dot || !card) return null;
            const nr = el.getBoundingClientRect();
            const dr = dot.getBoundingClientRect();
            const cr = card.getBoundingClientRect();
            return {
                node: { x: nr.x, y: nr.y, width: nr.width, height: nr.height, bottom: nr.bottom },
                dot: { x: dr.x, y: dr.y, width: dr.width, height: dr.height, bottom: dr.bottom },
                card: { x: cr.x, y: cr.y, width: cr.width, height: cr.height, bottom: cr.bottom }
            };
        }, n);
        console.log(n, 'Node:', nodeBox);
    }

    await browser.close();
})();
