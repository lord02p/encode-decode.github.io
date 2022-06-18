var textarea = document.getElementById('decode_textarea');
var decode_btn = document.getElementById('decode_btn');
textarea.value = '😉😄😛 😑😄😍😂😗😘😄 🤔😗 😄🥰😂😗🤣😄 😵 🤣😄😂😗🤣😄 😄🤣😊🤔😗🤗😇';

function decode_with_emoji() {
    decode_btn.addEventListener('click', () => {
        var textarea_value = textarea.value;
        textarea_value = textarea_value.toLowerCase()
        if (textarea_value.includes('😀')) {
            textarea_value = textarea_value.replaceAll('😀', 'a');
        }
        if (textarea_value.includes('😁')) {
            textarea_value = textarea_value.replaceAll('😁', 'b');
        }
        if (textarea_value.includes('😂')) {
            textarea_value = textarea_value.replaceAll('😂', 'c');
        }
        if (textarea_value.includes('🤣')) {
            textarea_value = textarea_value.replaceAll('🤣', 'd');
        }
        if (textarea_value.includes('😄')) {
            textarea_value = textarea_value.replaceAll('😄', 'e');
        }
        if (textarea_value.includes('😅')) {
            textarea_value = textarea_value.replaceAll('😅', 'f');
        }
        if (textarea_value.includes('😆')) {
            textarea_value = textarea_value.replaceAll('😆', 'g');
        }
        if (textarea_value.includes('😉')) {
            textarea_value = textarea_value.replaceAll('😉', 'h');
        }
        if (textarea_value.includes('😊')) {
            textarea_value = textarea_value.replaceAll('😊', 'i');
        }
        if (textarea_value.includes('😋')) {
            textarea_value = textarea_value.replaceAll('😋', 'j');
        }
        if (textarea_value.includes('😎')) {
            textarea_value = textarea_value.replaceAll('😎', 'k');
        }
        if (textarea_value.includes('😍')) {
            textarea_value = textarea_value.replaceAll('😍', 'l');
        }
        if (textarea_value.includes('😘')) {
            textarea_value = textarea_value.replaceAll('😘', 'm');
        }
        if (textarea_value.includes('🥰')) {
            textarea_value = textarea_value.replaceAll('🥰', 'n');
        }
        if (textarea_value.includes('😗')) {
            textarea_value = textarea_value.replaceAll('😗', 'o');
        }
        if (textarea_value.includes('😚')) {
            textarea_value = textarea_value.replaceAll('😚', 'p');
        }
        if (textarea_value.includes('🙂')) {
            textarea_value = textarea_value.replaceAll('🙂', 'q');
        }
        if (textarea_value.includes('🤗')) {
            textarea_value = textarea_value.replaceAll('🤗', 'r');
        }
        if (textarea_value.includes('🤩')) {
            textarea_value = textarea_value.replaceAll('🤩', 's');
        }
        if (textarea_value.includes('🤔')) {
            textarea_value = textarea_value.replaceAll('🤔', 't');
        }
        if (textarea_value.includes('🤨')) {
            textarea_value = textarea_value.replaceAll('🤨', 'u');
        }
        if (textarea_value.includes('😐')) {
            textarea_value = textarea_value.replaceAll('😐', 'v');
        }
        if (textarea_value.includes('😑')) {
            textarea_value = textarea_value.replaceAll('😑', 'w');
        }
        if (textarea_value.includes('😶')) {
            textarea_value = textarea_value.replaceAll('😶', 'x');
        }
        if (textarea_value.includes('😛')) {
            textarea_value = textarea_value.replaceAll('😛', 'y');
        }
        if (textarea_value.includes('🥱')) {
            textarea_value = textarea_value.replaceAll('🥱', 'z');
        }
        if (textarea_value.includes('🌑')) {
            textarea_value = textarea_value.replaceAll('🌑', '1');
        }
        if (textarea_value.includes('🌓')) {
            textarea_value = textarea_value.replaceAll('🌓', '2');
        }
        if (textarea_value.includes('🌕')) {
            textarea_value = textarea_value.replaceAll('🌕', '3');
        }
        if (textarea_value.includes('🌙')) {
            textarea_value = textarea_value.replaceAll('🌙', '4');
        }
        if (textarea_value.includes('🌟')) {
            textarea_value = textarea_value.replaceAll('🌟', '5');
        }
        if (textarea_value.includes('🌠')) {
            textarea_value = textarea_value.replaceAll('🌠', '6');
        }
        if (textarea_value.includes('🌀')) {
            textarea_value = textarea_value.replaceAll('🌀', '7');
        }
        if (textarea_value.includes('⚡')) {
            textarea_value = textarea_value.replaceAll('⚡', '8');
        }
        if (textarea_value.includes('🔥')) {
            textarea_value = textarea_value.replaceAll('🔥', '9');
        }
        if (textarea_value.includes('💧')) {
            textarea_value = textarea_value.replaceAll('💧', '0');
        }
        if (textarea_value.includes('🤑')) {
            textarea_value = textarea_value.replaceAll('🤑', '~');
        }
        if (textarea_value.includes('🥳')) {
            textarea_value = textarea_value.replaceAll('🥳', '`');
        }
        if (textarea_value.includes('🤠')) {
            textarea_value = textarea_value.replaceAll('🤠', '!');
        }
        if (textarea_value.includes('😲')) {
            textarea_value = textarea_value.replaceAll('😲', '@');
        }
        if (textarea_value.includes('🙁')) {
            textarea_value = textarea_value.replaceAll('🙁', '#');
        }
        if (textarea_value.includes('😖')) {
            textarea_value = textarea_value.replaceAll('😖', '$');
        }
        if (textarea_value.includes('😞')) {
            textarea_value = textarea_value.replaceAll('😞', '%');
        }
        if (textarea_value.includes('😤')) {
            textarea_value = textarea_value.replaceAll('😤', '^');
        }
        if (textarea_value.includes('😢')) {
            textarea_value = textarea_value.replaceAll('😢', '&');
        }
        if (textarea_value.includes('😭')) {
            textarea_value = textarea_value.replaceAll('😭', '*');
        }
        if (textarea_value.includes('😨')) {
            textarea_value = textarea_value.replaceAll('😨', '(');
        }
        if (textarea_value.includes('😩')) {
            textarea_value = textarea_value.replaceAll('😩', ')');
        }
        if (textarea_value.includes('🤯')) {
            textarea_value = textarea_value.replaceAll('🤯', '-');
        }
        if (textarea_value.includes('😬')) {
            textarea_value = textarea_value.replaceAll('😬', '_');
        }
        if (textarea_value.includes('😰')) {
            textarea_value = textarea_value.replaceAll('😰', '+');
        }
        if (textarea_value.includes('😱')) {
            textarea_value = textarea_value.replaceAll('😱', '=');
        }
        if (textarea_value.includes('🥵')) {
            textarea_value = textarea_value.replaceAll('🥵', '[');
        }
        if (textarea_value.includes('🥶')) {
            textarea_value = textarea_value.replaceAll('🥶', ']');
        }
        if (textarea_value.includes('😳')) {
            textarea_value = textarea_value.replaceAll('😳', '{');
        }
        if (textarea_value.includes('🤪')) {
            textarea_value = textarea_value.replaceAll('🤪', '}');
        }
        if (textarea_value.includes('😵')) {
            textarea_value = textarea_value.replaceAll('😵', '|');
        }
        if (textarea_value.includes('🥴')) {
            textarea_value = textarea_value.replaceAll('🥴', '"\"');
        }
        if (textarea_value.includes('😠')) {
            textarea_value = textarea_value.replaceAll('😠', ';');
        }
        if (textarea_value.includes('😡')) {
            textarea_value = textarea_value.replaceAll('😡', ':');
        }
        if (textarea_value.includes('🤬')) {
            textarea_value = textarea_value.replaceAll('🤬', '<');
        }
        if (textarea_value.includes('😷')) {
            textarea_value = textarea_value.replaceAll('😷', '>');
        }
        if (textarea_value.includes('🤒')) {
            textarea_value = textarea_value.replaceAll('🤒', '?');
        }
        if (textarea_value.includes('🤕')) {
            textarea_value = textarea_value.replaceAll('🤕', '/');
        }
        if (textarea_value.includes('🤧')) {
            textarea_value = textarea_value.replaceAll('🤧', ',');
        }
        if (textarea_value.includes('😇')) {
            textarea_value = textarea_value.replaceAll('😇', '.');
        }
        document.getElementById('decode_result').innerText = textarea_value;

        textarea.value = '';

    })
}
decode_with_emoji();