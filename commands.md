<!-- Setup: -->
dotnet new console --framework net6.0 --use-program-main
<!-- prompt created .vscode, bin, Debug, net6.0, obj for me automatically. -->


<!-- using our .NET CaLI we run the program with: -->
dotnet run


<!-- The Debug Console doesn't accept terminal input for a running program. To handle terminal input while debugging, you can use the integrated terminal or an external terminal. -->
.vscode/launch.json.
<!-- Change the console setting from internalConsole to integratedTerminal with JSON -->
"console": "integratedTerminal",



<!-- Publishing the app -->
<!-- .NET CLI -->
dotnet publish
dotnet publish --configuration Release
<!-- The default build configuration is Debug, so this command specifies the Release build configuration. -->
<!-- Running this command creates obj/Release files -->
<!-- Looks like the tutorial Im following gets a Medieval-Realm.deps.json file I don't have. -->
<!-- This is the application's runtime dependencies file. It defines the .NET components and the libraries (including the dynamic link library that contains your application) needed to run the app. -->

<!-- HelloWorld.exe (HelloWorld on Linux, not created on macOS.)
This is the framework-dependent executable version of the application. The file is operating-system-specific. -->

<!-- HelloWorld.runtimeconfig.json -->
<!-- This is the application's runtime configuration file. It identifies the version of .NET that your application was built to run on. You can also add configuration options to it. -->
This ^ was also not created.
