entry: {
    vendor: './src/vendor.ts';
    polyfills: './src/polyfills.ts';
    main: './src/main.ts';
};

{
    test: /\.html$/;
    loader: 'html-loader'
};

{
    test: /\.(scss|sass)$/;
    use: [
        'to-string-loader',
        { 
            loader: 'css-loader', 
            options: { 
                sourceMap: true 
            } 
        },
        { 
            loader: 'sass-loader', 
            options: { 
                sourceMap: true 
            } 
        }
    ];
    
    include: helpers.root('src', 'app');
}