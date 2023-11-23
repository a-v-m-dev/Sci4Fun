  // Assuming you got your pdf file:
File file = new File(Environment.getExternalStorageDirectory() + "pdf/supplementary_learning_material/agricrop_module.pdf");

webview = (WebView) findViewById(R.id.webview);
WebSettings settings = webview.getSettings();
settings.setJavaScriptEnabled(true);
settings.setAllowFileAccessFromFileURLs(true);
settings.setAllowUniversalAccessFromFileURLs(true);
settings.setBuiltInZoomControls(true);
webview.setWebChromeClient(new WebChromeClient());
webview.loadUrl("/agricrop_module1_view.html" + file.getAbsolutePath() + "#zoom=page-width");