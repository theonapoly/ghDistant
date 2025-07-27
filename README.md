# Hook Git - pre-commit

Ce hook demande à l'utilisateur s'il souhaite enregistrer une information de vérification lors du commit.

Si la réponse est "y", un fichier `suivi/commitInfo.txt` est généré et ajouté au commit avec la date et l'heure.

Installation :

-   Copier ce fichier dans `.git/hooks/` sous le nom `pre-commit`
-   Rendre le fichier exécutable : `chmod +x .git/hooks/pre-commit`

<<<<<<< HEAD
# Ceci est une modification faite directement à partir de Github
=======
# Ceci est une mofication en faite en locale - test conflit
>>>>>>> cfd0d96 (C10 : modification locale en conflit)
