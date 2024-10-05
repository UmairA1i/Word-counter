document.querySelector('#textArea').addEventListener('input', function() {
    let text = this.value;

    let words = text.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ").filter(word => word.trim().length > 0);
    let wordCount = words.length;

    let letters = text.replace(/\s/g, ""); 
    let letterCount = letters.length;

    let paragraphs = text.split(/\n+/).filter(para => para.trim().length > 0);
    let paragraphCount = paragraphs.length;

    let sentences = text.split(/[.?!;]/).filter(sentence => sentence.trim().length > 0);
    let sentencesCount = sentences.length;
    document.querySelector('#wordCount').textContent = wordCount;
    document.querySelector('#letterCount').textContent = letterCount;
    document.querySelector('#paragraphCount').textContent = paragraphCount;
    document.querySelector('#sentenceCount').textContent = sentencesCount;
});