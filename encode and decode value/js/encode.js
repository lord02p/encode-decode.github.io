var textarea = document.getElementById('textarea');
var btn = document.getElementById('btn');
textarea.value = 'Hey Welcome To Encode | Decode Editor.'

function encode_with_emoji() {
    btn.addEventListener('click', () => {
        var textarea_value = textarea.value;
        textarea_value = textarea_value.toLowerCase()
        if (textarea_value.includes('a')) {
            textarea_value = textarea_value.replaceAll('a', '😀');
        }
        if (textarea_value.includes('b')) {
            textarea_value = textarea_value.replaceAll('b', '😁');
        }
        if (textarea_value.includes('c')) {
            textarea_value = textarea_value.replaceAll('c', '😂');
        }
        if (textarea_value.includes('d')) {
            textarea_value = textarea_value.replaceAll('d', '🤣');
        }
        if (textarea_value.includes('e')) {
            textarea_value = textarea_value.replaceAll('e', '😄');
        }
        if (textarea_value.includes('f')) {
            textarea_value = textarea_value.replaceAll('f', '😅');
        }
        if (textarea_value.includes('g')) {
            textarea_value = textarea_value.replaceAll('g', '😆');
        }
        if (textarea_value.includes('h')) {
            textarea_value = textarea_value.replaceAll('h', '😉');
        }
        if (textarea_value.includes('i')) {
            textarea_value = textarea_value.replaceAll('i', '😊');
        }
        if (textarea_value.includes('j')) {
            textarea_value = textarea_value.replaceAll('j', '😋');
        }
        if (textarea_value.includes('k')) {
            textarea_value = textarea_value.replaceAll('k', '😎');
        }
        if (textarea_value.includes('l')) {
            textarea_value = textarea_value.replaceAll('l', '😍');
        }
        if (textarea_value.includes('m')) {
            textarea_value = textarea_value.replaceAll('m', '😘');
        }
        if (textarea_value.includes('n')) {
            textarea_value = textarea_value.replaceAll('n', '🥰');
        }
        if (textarea_value.includes('o')) {
            textarea_value = textarea_value.replaceAll('o', '😗');
        }
        if (textarea_value.includes('p')) {
            textarea_value = textarea_value.replaceAll('p', '😚');
        }
        if (textarea_value.includes('q')) {
            textarea_value = textarea_value.replaceAll('q', '🙂');
        }
        if (textarea_value.includes('r')) {
            textarea_value = textarea_value.replaceAll('r', '🤗');
        }
        if (textarea_value.includes('s')) {
            textarea_value = textarea_value.replaceAll('s', '🤩');
        }
        if (textarea_value.includes('t')) {
            textarea_value = textarea_value.replaceAll('t', '🤔');
        }
        if (textarea_value.includes('u')) {
            textarea_value = textarea_value.replaceAll('u', '🤨');
        }
        if (textarea_value.includes('v')) {
            textarea_value = textarea_value.replaceAll('v', '😐');
        }
        if (textarea_value.includes('w')) {
            textarea_value = textarea_value.replaceAll('w', '😑');
        }
        if (textarea_value.includes('x')) {
            textarea_value = textarea_value.replaceAll('x', '😶');
        }
        if (textarea_value.includes('y')) {
            textarea_value = textarea_value.replaceAll('y', '😛');
        }
        if (textarea_value.includes('z')) {
            textarea_value = textarea_value.replaceAll('z', '🥱');
        }
        if (textarea_value.includes('1')) {
            textarea_value = textarea_value.replaceAll('1', '🌑');
        }
        if (textarea_value.includes('2')) {
            textarea_value = textarea_value.replaceAll('2', '🌓');
        }
        if (textarea_value.includes('3')) {
            textarea_value = textarea_value.replaceAll('3', '🌕');
        }
        if (textarea_value.includes('4')) {
            textarea_value = textarea_value.replaceAll('4', '🌙');
        }
        if (textarea_value.includes('5')) {
            textarea_value = textarea_value.replaceAll('5', '🌟');
        }
        if (textarea_value.includes('6')) {
            textarea_value = textarea_value.replaceAll('6', '🌠');
        }
        if (textarea_value.includes('7')) {
            textarea_value = textarea_value.replaceAll('7', '🌀');
        }
        if (textarea_value.includes('8')) {
            textarea_value = textarea_value.replaceAll('8', '⚡');
        }
        if (textarea_value.includes('9')) {
            textarea_value = textarea_value.replaceAll('9', '🔥');
        }
        if (textarea_value.includes('0')) {
            textarea_value = textarea_value.replaceAll('0', '💧');
        }
        if (textarea_value.includes('~')) {
            textarea_value = textarea_value.replaceAll('~', '🤑');
        }
        if (textarea_value.includes('`')) {
            textarea_value = textarea_value.replaceAll('`', '🥳');
        }
        if (textarea_value.includes('!')) {
            textarea_value = textarea_value.replaceAll('!', '🤠');
        }
        if (textarea_value.includes('@')) {
            textarea_value = textarea_value.replaceAll('@', '😲');
        }
        if (textarea_value.includes('#')) {
            textarea_value = textarea_value.replaceAll('#', '🙁');
        }
        if (textarea_value.includes('$')) {
            textarea_value = textarea_value.replaceAll('$', '😖');
        }
        if (textarea_value.includes('%')) {
            textarea_value = textarea_value.replaceAll('%', '😞');
        }
        if (textarea_value.includes('^')) {
            textarea_value = textarea_value.replaceAll('^', '😤');
        }
        if (textarea_value.includes('&')) {
            textarea_value = textarea_value.replaceAll('&', '😢');
        }
        if (textarea_value.includes('*')) {
            textarea_value = textarea_value.replaceAll('*', '😭');
        }
        if (textarea_value.includes('(')) {
            textarea_value = textarea_value.replaceAll('(', '😨');
        }
        if (textarea_value.includes(')')) {
            textarea_value = textarea_value.replaceAll(')', '😩');
        }
        if (textarea_value.includes('-')) {
            textarea_value = textarea_value.replaceAll('-', '🤯');
        }
        if (textarea_value.includes('_')) {
            textarea_value = textarea_value.replaceAll('_', '😬');
        }
        if (textarea_value.includes('+')) {
            textarea_value = textarea_value.replaceAll('+', '😰');
        }
        if (textarea_value.includes('=')) {
            textarea_value = textarea_value.replaceAll('=', '😱');
        }
        if (textarea_value.includes('[')) {
            textarea_value = textarea_value.replaceAll('[', '🥵');
        }
        if (textarea_value.includes(']')) {
            textarea_value = textarea_value.replaceAll(']', '🥶');
        }
        if (textarea_value.includes('{')) {
            textarea_value = textarea_value.replaceAll('{', '😳');
        }
        if (textarea_value.includes('}')) {
            textarea_value = textarea_value.replaceAll('}', '🤪');
        }
        if (textarea_value.includes('|')) {
            textarea_value = textarea_value.replaceAll('|', '😵');
        }
        if (textarea_value.includes('"\"')) {
            textarea_value = textarea_value.replaceAll('"\"', '🥴');
        }
        if (textarea_value.includes(';')) {
            textarea_value = textarea_value.replaceAll(';', '😠');
        }
        if (textarea_value.includes(':')) {
            textarea_value = textarea_value.replaceAll(':', '😡');
        }
        if (textarea_value.includes('<')) {
            textarea_value = textarea_value.replaceAll('<', '🤬');
        }
        if (textarea_value.includes('>')) {
            textarea_value = textarea_value.replaceAll('>', '😷');
        }
        if (textarea_value.includes('?')) {
            textarea_value = textarea_value.replaceAll('?', '🤒');
        }
        if (textarea_value.includes('/')) {
            textarea_value = textarea_value.replaceAll('/', '🤕');
        }
        if (textarea_value.includes(',')) {
            textarea_value = textarea_value.replaceAll(',', '🤧');
        }
        if (textarea_value.includes('.')) {
            textarea_value = textarea_value.replaceAll('.', '😇');
        }
        document.getElementById('result').innerText = textarea_value;

        textarea.value = '';

    })
}
encode_with_emoji();