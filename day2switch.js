function getLetter(s) {
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a')
        {return s[i].toUpperCase(); break;}
        if(s[i] === 'b')
        {return s[i].toUpperCase(); break;}
        if(s[i] === 'h')
        {return 'C'; break;}
        if(s[i] === 'n' || 'z')
        {return 'D'; break;}
    }
    return;
}
