
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Check, Loader2, X } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Password validation state
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasLetter: false,
    hasNumber: false
  });

  // Update password requirements whenever password changes
  useEffect(() => {
    setPasswordRequirements({
      minLength: password.length >= 8,
      hasLetter: /[a-zA-Z]/.test(password),
      hasNumber: /\d/.test(password)
    });
  }, [password]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoginLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Erfolgreich angemeldet",
        description: "Du wirst weitergeleitet...",
      });

      navigate('/profile');
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
      toast({
        title: "Anmeldung fehlgeschlagen",
        description: error.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
        variant: "destructive",
      });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Validate password before submission
    if (!passwordRequirements.minLength || !passwordRequirements.hasLetter || !passwordRequirements.hasNumber) {
      setError('Bitte erfülle alle Passwortanforderungen.');
      return;
    }
    
    setSignupLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      toast({
        title: "Registrierung erfolgreich",
        description: "Bitte überprüfe deine E-Mail für die Bestätigung.",
      });

      setActiveTab('login');
    } catch (error: any) {
      console.error('Signup error:', error);
      setError(error.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
      toast({
        title: "Registrierung fehlgeschlagen",
        description: error.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
        variant: "destructive",
      });
    } finally {
      setSignupLoading(false);
    }
  };

  // Future Discord login implementation
  const handleDiscordLogin = () => {
    toast({
      title: "Discord Login",
      description: "Discord Login wird in Kürze verfügbar sein.",
    });
  };

  const isPasswordValid = passwordRequirements.minLength && 
                         passwordRequirements.hasLetter && 
                         passwordRequirements.hasNumber;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white mt-16">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-blue-100">
            <CardHeader className="space-y-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center text-blue-900">Willkommen zurück</CardTitle>
              <CardDescription className="text-center text-blue-700">
                Melde dich an oder registriere dich
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Anmelden</TabsTrigger>
                  <TabsTrigger value="signup" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">Registrieren</TabsTrigger>
                </TabsList>
                
                {error && (
                  <Alert variant="destructive" className="my-4 bg-red-50 text-red-800 border-red-200">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle className="font-medium">Fehler</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <TabsContent value="login">
                  <form onSubmit={handleLoginSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-login">
                        E-Mail
                      </label>
                      <Input
                        id="email-login"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="beispiel@provider.de"
                        autoComplete="email"
                        required
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password-login">
                        Passwort
                      </label>
                      <Input
                        id="password-login"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Dein Passwort"
                        autoComplete="current-password"
                        required
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700" 
                      disabled={loginLoading}
                    >
                      {loginLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Wird angemeldet...
                        </>
                      ) : (
                        "Anmelden"
                      )}
                    </Button>
                    
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">oder</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full border-blue-300"
                      onClick={handleDiscordLogin}
                    >
                      <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
                        alt="Discord Logo" 
                        className="w-5 h-4 mr-2" 
                      />
                      Mit Discord anmelden (bald verfügbar)
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup">
                  <form onSubmit={handleSignupSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email-signup">
                        E-Mail
                      </label>
                      <Input
                        id="email-signup"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="beispiel@provider.de"
                        autoComplete="email"
                        required
                        className="border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="password-signup">
                        Passwort
                      </label>
                      <Input
                        id="password-signup"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Sicheres Passwort erstellen"
                        autoComplete="new-password"
                        required
                        className={`border-blue-200 focus:border-blue-400 focus:ring-blue-400 ${
                          password && !isPasswordValid ? 'border-red-300' : ''
                        }`}
                      />
                      
                      {/* Password requirements */}
                      <div className="mt-2 text-sm space-y-1">
                        <p className="font-medium text-gray-700">Passwort muss enthalten:</p>
                        <div className="flex items-center">
                          {passwordRequirements.minLength ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordRequirements.minLength ? "text-green-600" : "text-gray-600"}>
                            Mindestens 8 Zeichen
                          </span>
                        </div>
                        <div className="flex items-center">
                          {passwordRequirements.hasLetter ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordRequirements.hasLetter ? "text-green-600" : "text-gray-600"}>
                            Mindestens ein Buchstabe
                          </span>
                        </div>
                        <div className="flex items-center">
                          {passwordRequirements.hasNumber ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          <span className={passwordRequirements.hasNumber ? "text-green-600" : "text-gray-600"}>
                            Mindestens eine Zahl
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700" 
                      disabled={signupLoading || !isPasswordValid}
                    >
                      {signupLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Wird registriert...
                        </>
                      ) : (
                        "Registrieren"
                      )}
                    </Button>
                    
                    <div className="relative my-4">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">oder</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full border-blue-300"
                      onClick={handleDiscordLogin}
                    >
                      <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" 
                        alt="Discord Logo" 
                        className="w-5 h-4 mr-2" 
                      />
                      Mit Discord registrieren (bald verfügbar)
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter className="flex flex-col bg-gradient-to-r from-blue-50 to-indigo-50 rounded-b-lg">
              <p className="mt-2 text-xs text-center text-gray-600">
                Durch die Anmeldung akzeptierst du unsere <a href="/datenschutz" className="text-blue-600 hover:underline">Datenschutzbedingungen</a>.
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
