.PHONY: build clean deploy

build:
	docker build --no-cache -t lychee3/k8s-web3-sv1-ap:1.0 .

unbuild:
	docker rmi lychee3/k8s-web3-sv1-ap:1.0

deploy:
	kubectl apply -f k8s/sv1-ap-deployment.yaml 

undeploy:
	kubectl delete -f k8s/sv1-ap-deployment.yaml 

clean:
	make undeploy
	make unbuild
